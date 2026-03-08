import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Your Resend-registered email (free tier can only send TO this address)
const OWNER_EMAIL = "1twoka44@gmail.com"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    const errors: string[] = []
    if (!name || name.trim().length === 0) errors.push("Name is required")
    if (!email || email.trim().length === 0) errors.push("Email is required")
    else if (!emailRegex.test(email)) errors.push("Please provide a valid email address")
    if (!subject || subject.trim().length === 0) errors.push("Subject is required")
    if (!message || message.trim().length === 0) errors.push("Message is required")

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [OWNER_EMAIL],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f172a; border-radius: 12px; color: #e2e8f0;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="margin: 0; color: white; font-size: 20px;">📬 New Portfolio Message</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #94a3b8; width: 90px;">Name</td>
              <td style="padding: 10px 0; color: #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #94a3b8;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #94a3b8;">Subject</td>
              <td style="padding: 10px 0; color: #e2e8f0;">${subject}</td>
            </tr>
          </table>
          <div style="background: #1e293b; padding: 16px; border-radius: 8px; border-left: 3px solid #6366f1;">
            <p style="font-weight: bold; color: #94a3b8; margin: 0 0 8px 0;">Message</p>
            <p style="color: #e2e8f0; line-height: 1.7; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 20px; font-size: 11px; color: #475569;">
            Received via your portfolio · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST<br>
            💡 Hit reply to respond directly to ${name}.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", JSON.stringify(error))
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again later." },
        { status: 500 }
      )
    }

    console.log("Email sent, ID:", data?.id)
    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
