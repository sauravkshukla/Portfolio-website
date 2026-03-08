"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Code2, ExternalLink, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export function HeroSection() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setResumeDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const openResume = (type: "webdev" | "aiml") => {
    const fileName =
      type === "webdev"
        ? "/resume/Saurav_Kumar_Shukla_WebDev_Resume.pdf"
        : "/resume/Saurav_Kumar_Shukla_AI_ML_Resume.pdf"
    window.open(fileName, "_blank")
    setResumeDropdownOpen(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-indigo absolute w-[500px] h-[500px] -top-40 -left-40" />
        <div className="orb orb-violet absolute w-[400px] h-[400px] top-1/3 -right-20" />
        <div className="orb orb-cyan absolute w-[300px] h-[300px] bottom-10 left-1/3" />
        <div className="orb orb-emerald absolute w-[250px] h-[250px] bottom-20 -right-10" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative inline-block">
              {/* Spinning gradient ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)",
                  animation: "spin-slow 4s linear infinite",
                  padding: "3px",
                  borderRadius: "9999px",
                }}
              />
              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-background/80 shadow-2xl avatar-glow">
                <Image
                  src="/images/profile.jpg"
                  alt="Saurav Kumar Shukla"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold mb-4"
          >
            <span className="gradient-text">Saurav Kumar Shukla</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance flex items-center justify-center gap-2 flex-wrap">
              <Code2 className="w-5 h-5 text-indigo-500" />
              Full Stack Web Developer
              <span className="text-muted-foreground/50">|</span>
              Data Science &amp; AI Enthusiast
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed"
          >
            Passionate about coding, problem-solving, and building real-world projects that create meaningful impact.
            Currently pursuing MCA at SRM IST with expertise in modern web technologies and AI solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Hire Me */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto btn-glow relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                onClick={handleHireMe}
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </motion.div>

            {/* View Resume Dropdown */}
            <div ref={dropdownRef} className="relative">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent border-primary/30 hover:border-primary/70 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
                  onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
                >
                  <Download className="h-4 w-4" />
                  View Resume
                  <motion.div
                    animate={{ rotate: resumeDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>

              <AnimatePresence>
                {resumeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 glass-card rounded-xl overflow-hidden z-50 shadow-2xl"
                  >
                    <div className="p-1">
                      <motion.button
                        whileHover={{ backgroundColor: "rgba(99, 102, 241, 0.15)", x: 4 }}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3"
                        onClick={() => openResume("webdev")}
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Code2 className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold">Web Development</p>
                          <p className="text-xs text-muted-foreground">Full Stack &amp; Frontend</p>
                        </div>
                        <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
                      </motion.button>

                      <motion.button
                        whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.15)", x: 4 }}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3"
                        onClick={() => openResume("aiml")}
                      >
                        <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-violet-400 text-sm font-bold">AI</span>
                        </div>
                        <div>
                          <p className="font-semibold">AI &amp; ML</p>
                          <p className="text-xs text-muted-foreground">Data Science &amp; AI Projects</p>
                        </div>
                        <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Me */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto hover:bg-secondary/80 transition-all duration-300"
                onClick={handleContactMe}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
