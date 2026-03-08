"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ResumeSelector } from "@/components/resume-selector"

export function HeroSection() {
  const handleHireMe = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg group cursor-pointer"
            >
              <Image
                src="/images/profile.jpg"
                alt="Saurav Kumar Shukla"
                width={128}
                height={128}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
            >
              Saurav Kumar Shukla
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance"
            >
              Full Stack Web Developer | Data Science & AI Enthusiast | Passionate about Scalable & Secure Solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty"
            >
              Passionate about coding, problem-solving, and building real-world projects that create meaningful impact.
              Currently pursuing MCA at SRM IST with expertise in modern web technologies and AI solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto hover:shadow-lg transition-all duration-200"
                onClick={handleHireMe}
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </motion.div>

            <ResumeSelector />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto hover:shadow-lg transition-all duration-200"
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
