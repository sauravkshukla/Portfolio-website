"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const education = [
    {
      degree: "MCA (2024–2026)",
      institution: "SRM Institute of Science & Technology, Chennai",
      cgpa: "9.68",
      grade: "Distinction",
      color: "from-indigo-500 to-violet-500",
      icon: Star,
    },
    {
      degree: "BCA (2020–2023)",
      institution: "Nilamber Pitamber University",
      cgpa: "7.1",
      grade: "First Class",
      color: "from-cyan-500 to-blue-500",
      icon: Award,
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background subtle orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-violet absolute w-[350px] h-[350px] -top-20 -right-20 opacity-10" />
        <div className="orb orb-cyan absolute w-[250px] h-[250px] bottom-10 -left-10 opacity-8" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo with hover effects */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Animated gradient border */}
            <div
              className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)", backgroundSize: "300%", animation: "gradient-shift 4s ease infinite" }}
            />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border/30"
              style={{ animation: "float-slow 8s ease-in-out infinite" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Saurav Shukla"
                width={400}
                height={500}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold">Open to Opportunities</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am an MCA student at SRM Institute of Science &amp; Technology, with a BCA background, and a strong
                foundation in web development, AI, and data analytics. Coming from a lower-middle-class family, I am
                highly motivated to grow as a Full Stack Developer and Data Scientist, building solutions that create
                real impact.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h4 className="text-lg font-semibold">Education</h4>
              </div>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group"
                >
                  <Card className="card-hover border-border/40 relative overflow-hidden">
                    {/* Gradient top line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu.color}`} />
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <edu.icon className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                            <p className="font-semibold text-sm">{edu.degree}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className={`text-sm font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                            {edu.cgpa} CGPA
                          </span>
                          <Badge variant="outline" className="text-xs">{edu.grade}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
