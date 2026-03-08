"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ResumeSelectorProps {
  variant?: "dropdown" | "modal"
  onClose?: () => void
  trigger?: React.ReactNode
}

export function ResumeSelector({ variant = "dropdown", onClose }: ResumeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleResumeClick = (type: "web" | "ai") => {
    const fileName =
      type === "web" ? "Saurav_Kumar_Shukla_Web_Development_Resume.pdf" : "Saurav_Kumar_Shukla_AI_ML_Resume.pdf"
    window.open(`/resume/${fileName}`, "_blank")
    setIsOpen(false)
    onClose?.()
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
    <div className="relative">
      <Button
        variant="outline"
        size="lg"
        className="w-full sm:w-auto bg-transparent hover:bg-accent transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-2">
          View Resume
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50"
            >
              <div className="p-2">
                {resumeOptions.map((option, index) => (
                  <motion.button
                    key={option.type}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleResumeClick(option.type)}
                    className="w-full text-left px-4 py-3 rounded-md hover:bg-accent transition-all duration-200 group"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {option.title}
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground transition-colors">
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
  )
}
