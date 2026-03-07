import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "1twoka44@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Message from Your Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
              <td style="padding: 8px 0; color: #333;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
            <div style="background: #fff; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: #333; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">Sent from your portfolio contact form · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again later." },
        { status: 500 }
      )
    }

    console.log("Email sent successfully, ID:", data?.id)

    return NextResponse.json({
      success: true,
      message: "Your message has been received. I'll get back to you soon!",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
