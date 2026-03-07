"use client"

import { Linkedin, Github, Mail, Code } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/saurav-shukla700",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/sauravkshukla",
      label: "GitHub",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/sauravkshukla",
      label: "LeetCode",
    },
    {
      icon: Mail,
      href: "mailto:sauravkshukla@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Saurav Kumar Shukla</h3>
            <p className="text-muted-foreground">Full Stack Developer & Data Science Enthusiast</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">© 2025 Saurav Kumar Shukla. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with Next.js, Tailwind CSS, and deployed on Vercel
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
