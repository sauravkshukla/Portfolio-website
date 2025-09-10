"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-6">
              <User className="w-24 h-24 text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an MCA student at SRM Institute of Science & Technology, with a BCA background, and a strong
                foundation in web development, AI, and data analytics. Coming from a lower-middle-class family, I am
                highly motivated to grow as a Full Stack Developer and Data Scientist, building solutions that create
                real impact.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Education</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">MCA (2024–2026)</p>
                    <p className="text-sm text-muted-foreground">SRM Institute of Science & Technology, Chennai</p>
                    <p className="text-sm text-primary font-medium">CGPA: 9.52</p>
                  </div>
                  <div>
                    <p className="font-medium">BCA (2020–2023)</p>
                    <p className="text-sm text-muted-foreground">Nilamber Pitamber University</p>
                    <p className="text-sm text-primary font-medium">CGPA: 7.1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
