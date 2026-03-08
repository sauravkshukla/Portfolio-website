import { type NextRequest, NextResponse } from "next/server"

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple rate limiting using in-memory store (for production, use Redis or similar)
const requestLog = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const userRequests = requestLog.get(ip) || []
  
  // Filter out requests outside the window
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)
  
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }
  
  // Update the log
  recentRequests.push(now)
  requestLog.set(ip, recentRequests)
  
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      )
    }

    const { name, email, subject, message } = await request.json()

    // Validation
    const errors: string[] = []

    if (!name || name.trim().length === 0) {
      errors.push("Name is required")
    } else if (name.trim().length < 2) {
      errors.push("Name must be at least 2 characters")
    }

    if (!email || email.trim().length === 0) {
      errors.push("Email is required")
    } else if (!emailRegex.test(email)) {
      errors.push("Please provide a valid email address")
    }

    if (!subject || subject.trim().length === 0) {
      errors.push("Subject is required")
    } else if (subject.trim().length < 3) {
      errors.push("Subject must be at least 3 characters")
    }

    if (!message || message.trim().length === 0) {
      errors.push("Message is required")
    } else if (message.trim().length < 10) {
      errors.push("Message must be at least 10 characters")
    }

    // Spam detection - check for excessive links or suspicious patterns
    const linkCount = (message.match(/https?:\/\//g) || []).length
    if (linkCount > 5) {
      errors.push("Message contains too many links")
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    // Log the submission
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Replace with actual email sending logic using Resend, SendGrid, or NodeMailer
    // Example with Resend:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'sauravkshukla@gmail.com',
    //   subject: `New Portfolio Contact: ${subject}`,
    //   html: `
    //     <div style="font-family: Arial, sans-serif; max-width: 600px;">
    //       <h2>New Message from Your Portfolio</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Subject:</strong> ${subject}</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${message.replace(/\n/g, '<br>')}</p>
    //     </div>
    //   `
    // })

    return NextResponse.json({
      success: true,
      message: "Your message has been received. I'll get back to you soon!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    )
  }
}
