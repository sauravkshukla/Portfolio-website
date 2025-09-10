import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Saurav Kumar Shukla - Full Stack Developer & Data Science Enthusiast",
  description:
    "Portfolio of Saurav Kumar Shukla - Full Stack Web Developer, Data Science & AI Enthusiast. Passionate about building scalable and secure solutions.",
  keywords: [
    "Full Stack Developer",
    "Data Science",
    "AI",
    "Web Development",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Saurav Kumar Shukla" }],
  creator: "Saurav Kumar Shukla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sauravkumarshukla.vercel.app",
    title: "Saurav Kumar Shukla - Full Stack Developer & Data Science Enthusiast",
    description: "Portfolio showcasing projects in web development, AI, and data science",
    siteName: "Saurav Kumar Shukla Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Kumar Shukla - Full Stack Developer",
    description: "Full Stack Developer & Data Science Enthusiast",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
