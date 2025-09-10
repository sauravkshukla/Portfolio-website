"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase as Certificate, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Java with DSA & System Design",
      provider: "Physics Wallah (PW)",
      category: "Programming",
      description:
        "Comprehensive course covering Java programming, data structures, algorithms, and system design principles",
    },
    {
      title: "Full Stack Web Development",
      provider: "Physics Wallah (PW)",
      category: "Web Development",
      description: "Complete full-stack development course covering frontend and backend technologies",
    },
    {
      title: "Cyber Security Fundamentals",
      provider: "IBM & Zscaler",
      category: "Security",
      description: "Foundational cybersecurity concepts and zero trust cloud security principles",
    },
    {
      title: "AICTE Internship on AI: Transformative Learning",
      provider: "AICTE",
      category: "Artificial Intelligence",
      description: "Government-recognized internship program focusing on AI and machine learning applications",
    },
    {
      title: "TechSaksham Program",
      provider: "Microsoft & SAP",
      category: "Technology",
      description: "Industry initiative for skill development in emerging technologies and digital transformation",
    },
    {
      title: "NIELIT CCC & ADCA Certificate",
      provider: "NIELIT",
      category: "Computer Literacy",
      description: "Course on Computer Concepts and Advanced Diploma in Computer Applications",
    },
  ]

  const categoryColors = {
    Programming: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Web Development": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "Artificial Intelligence": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Technology: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    "Computer Literacy": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  }

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and courses that enhance my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Certificate className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <Badge
                      variant="secondary"
                      className={`text-xs ${categoryColors[cert.category as keyof typeof categoryColors]}`}
                    >
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                  <CardDescription className="font-medium">{cert.provider}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cert.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 cursor-pointer">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
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
