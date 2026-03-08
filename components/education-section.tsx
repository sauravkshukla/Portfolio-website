"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SRM Institute of Science & Technology",
      location: "Chennai, Tamil Nadu",
      period: "2024 – 2026",
      cgpa: "9.68",
      status: "Current",
      description: "Pursuing advanced studies in computer applications with focus on software development, AI, and data science.",
      highlights: ["Software Engineering", "Data Structures & Algorithms", "Machine Learning", "Database Management"],
      gradient: "from-indigo-500 to-violet-500",
      glow: "group-hover:shadow-indigo-500/20",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Nilamber Pitamber University",
      location: "Jharkhand",
      period: "2020 – 2023",
      cgpa: "7.1",
      status: "Completed",
      description: "Comprehensive undergraduate program covering programming fundamentals, web development, and computer science principles.",
      highlights: ["Programming Fundamentals", "Web Development", "Database Systems", "Software Engineering"],
      gradient: "from-cyan-500 to-blue-500",
      glow: "group-hover:shadow-cyan-500/20",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">My academic journey and educational background</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card className={`card-hover border-border/40 overflow-hidden group-hover:border-indigo-500/30 group-hover:shadow-xl ${edu.glow} transition-all duration-300`}>
                <div className={`h-1 w-full bg-gradient-to-r ${edu.gradient}`} />
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center`}
                        >
                          <GraduationCap className="w-5 h-5 text-white" />
                        </motion.div>
                        <Badge
                          variant={edu.status === "Current" ? "default" : "secondary"}
                          className={edu.status === "Current" ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white border-0" : ""}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-1 group-hover:text-indigo-400 transition-colors duration-300">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-base font-medium mb-2">{edu.institution}</CardDescription>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1 font-semibold" style={{ color: "var(--accent-indigo)" }}>
                          <Award className="w-3.5 h-3.5" />
                          CGPA: {edu.cgpa}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{edu.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <motion.span
                          key={highlight}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-border hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-400 transition-all duration-200 cursor-default"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
