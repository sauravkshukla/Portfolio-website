"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, Code, Send, Download, ChevronDown, FileText } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Set these 3 values in your .env.local:
//   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
//   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
// Get them at: https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ""
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all fields.")
      setIsSubmitting(false)
      return
    }

    // Check EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Fallback: open mailto link
      const mailtoUrl = `mailto:sauravkshukla@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`
      window.open(mailtoUrl)
      setSuccessMessage("Opening your email client... If it didn't open, please email sauravkshukla@gmail.com directly.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
      setTimeout(() => setSuccessMessage(""), 8000)
      return
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "sauravkshukla@gmail.com",
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSuccessMessage("Message sent successfully! I'll get back to you soon. ✅")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSuccessMessage(""), 6000)
    } catch (err: unknown) {
      console.error("EmailJS error:", err)
      // Fallback to mailto on error
      const mailtoUrl = `mailto:sauravkshukla@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`
      window.open(mailtoUrl)
      setErrorMessage("Direct send failed — opened your email client as backup.")
      setTimeout(() => setErrorMessage(""), 6000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
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
    { icon: Phone, label: "Phone", value: "+91 7004714283", href: "tel:+917004714283" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/saurav-shukla700",
      href: "https://linkedin.com/in/saurav-shukla700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sauravkshukla",
      href: "https://github.com/sauravkshukla",
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/sauravkshukla",
      href: "https://leetcode.com/u/sauravkshukla",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let&apos;s discuss opportunities, collaborations, or just have a conversation about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-hover overflow-hidden">
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)" }}
              />
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <AnimatePresence>
                  {successMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm flex items-start gap-3"
                    >
                      <span className="text-lg">✅</span>
                      {successMessage}
                    </motion.div>
                  )}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="mb-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-600 dark:text-amber-400 text-sm flex items-start gap-3"
                    >
                      <span className="text-lg">⚠️</span>
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-glow transition-all duration-300 focus:border-indigo-500/70"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-glow transition-all duration-300 focus:border-indigo-500/70"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-glow transition-all duration-300 focus:border-indigo-500/70"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="input-glow transition-all duration-300 focus:border-indigo-500/70 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      className="w-full btn-glow relative overflow-hidden"
                      disabled={isSubmitting}
                      style={{
                        background: isSubmitting ? undefined : "linear-gradient(135deg, #6366f1, #8b5cf6)",
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>

                {/* ── Download Resume ── */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Download Resume</p>
                      <p className="text-xs text-muted-foreground">Get my latest resume PDF</p>
                    </div>
                    <div ref={downloadRef} className="relative">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="download-btn flex items-center gap-2 text-white border-0"
                          onClick={() => setDownloadOpen(!downloadOpen)}
                        >
                          <Download className="w-4 h-4" />
                          Download
                          <motion.div
                            animate={{ rotate: downloadOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-3 h-3" />
                          </motion.div>
                        </Button>
                      </motion.div>

                      <AnimatePresence>
                        {downloadOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                            transition={{ duration: 0.18 }}
                            className="absolute bottom-full mb-2 right-0 w-60 glass-card rounded-xl overflow-hidden z-50 shadow-2xl"
                          >
                            <div className="p-1">
                              <motion.button
                                whileHover={{ backgroundColor: "rgba(99,102,241,0.15)", x: 4 }}
                                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3"
                                onClick={() => downloadResume("webdev")}
                              >
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                  <FileText className="w-4 h-4 text-blue-400" />
                                </div>
                                <div>
                                  <p className="font-semibold text-xs">Web Development Resume</p>
                                  <p className="text-xs text-muted-foreground">Full Stack &amp; Frontend</p>
                                </div>
                              </motion.button>

                              <motion.button
                                whileHover={{ backgroundColor: "rgba(139,92,246,0.15)", x: 4 }}
                                className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3"
                                onClick={() => downloadResume("aiml")}
                              >
                                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                                  <span className="text-violet-400 text-xs font-bold">AI</span>
                                </div>
                                <div>
                                  <p className="font-semibold text-xs">AI &amp; ML Resume</p>
                                  <p className="text-xs text-muted-foreground">Data Science &amp; AI</p>
                                </div>
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects, or potential collaborations.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <contact.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}