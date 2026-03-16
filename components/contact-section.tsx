"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, Code, Send, Download, ChevronDown, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const [downloadOpen, setDownloadOpen] = useState(false)
  const downloadRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (downloadRef.current && !downloadRef.current.contains(event.target as Node)) {
        setDownloadOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // ✅ SEND FORM TO API
  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSuccessMessage("Message sent successfully! I'll get back to you soon. ✅")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })

      setTimeout(() => setSuccessMessage(""), 6000)

    } catch (err) {

      console.error(err)
      setErrorMessage("Failed to send message. Please try again.")

      setTimeout(() => setErrorMessage(""), 6000)
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))

  }

  const downloadResume = (type: "webdev" | "aiml") => {

    const fileName =
      type === "webdev"
        ? "Saurav_Kumar_Shukla_WebDev_Resume.pdf"
        : "Saurav_Kumar_Shukla_AI_ML_Resume.pdf"

    const link = document.createElement("a")
    link.href = `/resume/${fileName}`
    link.download = fileName
    link.click()

    setDownloadOpen(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sauravkshukla@gmail.com",
      href: "mailto:sauravkshukla@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7004714283",
      href: "tel:+917004714283"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/saurav-shukla700",
      href: "https://linkedin.com/in/saurav-shukla700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sauravkshukla",
      href: "https://github.com/sauravkshukla"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/sauravkshukla",
      href: "https://leetcode.com/u/sauravkshukla"
    }
  ]

  return (

    <section id="contact" className="scroll-mt-32 py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">

      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* CONTACT FORM */}

          <Card>

            <CardHeader>

              <CardTitle>Send me a message</CardTitle>

              <CardDescription>
                Fill out the form and I'll get back to you.
              </CardDescription>

            </CardHeader>

            <CardContent>

              <AnimatePresence>

                {successMessage && (
                  <div className="mb-4 text-green-500">{successMessage}</div>
                )}

                {errorMessage && (
                  <div className="mb-4 text-red-500">{errorMessage}</div>
                )}

              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">

                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <Button type="submit" disabled={isSubmitting} className="w-full">

                  {isSubmitting ? "Sending..." : "Send Message"}

                </Button>

              </form>

            </CardContent>

          </Card>

          {/* CONTACT INFO */}

          <div className="space-y-4">

            {contactInfo.map((contact, index) => (

              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >

                <contact.icon className="w-5 h-5" />

                <div>

                  <p className="font-medium">{contact.label}</p>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>

                </div>

              </a>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}