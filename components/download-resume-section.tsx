"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ChevronDown } from "lucide-react"

export function DownloadResumeSection() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = (type: "web" | "ai") => {
    const fileName =
      type === "web" ? "Saurav_Kumar_Shukla_Web_Development_Resume.pdf" : "Saurav_Kumar_Shukla_AI_ML_Resume.pdf"
    const link = document.createElement("a")
    link.href = `/resume/${fileName}`
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsOpen(false)
  }

  const resumeOptions = [
    {
      type: "web" as const,
      title: "Web Development Resume",
      description: "Full Stack & Frontend expertise",
    },
    {
      type: "ai" as const,
      title: "AI & ML Resume",
      description: "AI, Machine Learning & Data Science",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 pt-8 border-t border-border"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2">Download My Resume</h3>
        <p className="text-muted-foreground">Choose the resume that best matches your needs</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative w-full sm:w-auto">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-primary-foreground font-medium flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-4 w-4 group-hover:animate-bounce" />
            Download Resume
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 z-40"
                />

                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl z-50"
                >
                  <div className="p-2">
                    {resumeOptions.map((option, index) => (
                      <motion.button
                        key={option.type}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        onClick={() => handleDownload(option.type)}
                        className="w-full text-left px-4 py-3 rounded-md hover:bg-accent transition-all duration-200 group"
                      >
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {option.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
