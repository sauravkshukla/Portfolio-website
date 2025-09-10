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
      cgpa: "9.52",
      status: "Current",
      description:
        "Pursuing advanced studies in computer applications with focus on software development, AI, and data science.",
      highlights: ["Software Engineering", "Data Structures & Algorithms", "Machine Learning", "Database Management"],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Nilamber Pitamber University",
      location: "Jharkhand",
      period: "2020 – 2023",
      cgpa: "7.1",
      status: "Completed",
      description:
        "Comprehensive undergraduate program covering programming fundamentals, web development, and computer science principles.",
      highlights: ["Programming Fundamentals", "Web Development", "Database Systems", "Software Engineering"],
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <Badge variant={edu.status === "Current" ? "default" : "secondary"}>{edu.status}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium mb-2">{edu.institution}</CardDescription>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          CGPA: {edu.cgpa}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
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
