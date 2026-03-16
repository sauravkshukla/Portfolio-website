import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Saurav Kumar Shukla | Full Stack Developer & Data Science Enthusiast",
  description:
    "Portfolio of Saurav Kumar Shukla - Full Stack Developer, AI & Data Science Enthusiast. Building scalable web applications using React, Next.js, and modern technologies.",
  keywords: [
    "Saurav Kumar Shukla",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "AI Developer",
    "Data Science",
    "Machine Learning",
  ],
  authors: [{ name: "Saurav Kumar Shukla" }],
  creator: "Saurav Kumar Shukla",
  metadataBase: new URL("https://sauravkshukla.tech"),

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sauravkshukla.tech",
    title: "Saurav Kumar Shukla | Full Stack Developer",
    description:
      "Portfolio of Saurav Kumar Shukla showcasing projects in web development, AI, automation and data science.",
    siteName: "Saurav Kumar Shukla Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Saurav Kumar Shukla Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Saurav Kumar Shukla | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, AI and Data Science.",
    images: ["/preview.png"],
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

      {/* Structured Data for Google SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Saurav Kumar Shukla",
            url: "https://sauravkshukla.tech",
            jobTitle: "Full Stack Developer",
            description:
              "Full Stack Developer and Data Science enthusiast specializing in React, Next.js, AI and automation.",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "SRM Institute of Science and Technology",
            },
            sameAs: [
              "https://github.com/sauravkshukla",
              "https://linkedin.com/in/sauravkumarshukla",
            ],
          }),
        }}
      />

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>

    </html>
  )
}