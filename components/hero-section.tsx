"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, User } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <User className="w-16 h-16 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-balance">Saurav Kumar Shukla</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 text-balance">
              Full Stack Web Developer | Data Science & AI Enthusiast | Passionate about Scalable & Secure Solutions
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              Passionate about coding, problem-solving, and building real-world projects that create meaningful impact.
              Currently pursuing MCA at SRM IST with expertise in modern web technologies and AI solutions.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
