"use client"

import { Linkedin, Github, Mail, Code } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/saurav-shukla700", label: "LinkedIn", color: "hover:text-blue-400 hover:shadow-blue-400/40" },
    { icon: Github, href: "https://github.com/sauravkshukla", label: "GitHub", color: "hover:text-white hover:shadow-white/20" },
    { icon: Code, href: "https://leetcode.com/u/sauravkshukla", label: "LeetCode", color: "hover:text-yellow-400 hover:shadow-yellow-400/40" },
    { icon: Mail, href: "mailto:sauravkshukla@gmail.com", label: "Email", color: "hover:text-red-400 hover:shadow-red-400/40" },
  ]

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle gradient top glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 gradient-text">Saurav Kumar Shukla</h3>
            <p className="text-muted-foreground">Full Stack Developer &amp; Data Science Enthusiast</p>
          </div>

          <div className="flex justify-center space-x-5 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group ${link.color}`}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Saurav Kumar Shukla. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with Next.js, Tailwind CSS, and deployed on Vercel
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
