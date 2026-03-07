import { type NextRequest, NextResponse } from "next/server"

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    const errors: string[] = []

    if (!name || name.trim().length === 0) {
      errors.push("Name is required")
    }

    if (!email || email.trim().length === 0) {
      errors.push("Email is required")
    } else if (!emailRegex.test(email)) {
      errors.push("Please provide a valid email address")
    }

    if (!subject || subject.trim().length === 0) {
      errors.push("Subject is required")
    }

    if (!message || message.trim().length === 0) {
      errors.push("Message is required")
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
