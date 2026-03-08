"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar, Shield, Code, Globe, Cpu, Wrench, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const categoryConfig: Record<string, { color: string; gradient: string; icon: React.ElementType }> = {
  Programming: { color: "text-blue-400", gradient: "from-blue-500 to-indigo-500", icon: Code },
  "Web Development": { color: "text-green-400", gradient: "from-green-500 to-teal-500", icon: Globe },
  Security: { color: "text-red-400", gradient: "from-red-500 to-rose-500", icon: Shield },
  "Artificial Intelligence": { color: "text-violet-400", gradient: "from-violet-500 to-purple-500", icon: Cpu },
  Technology: { color: "text-orange-400", gradient: "from-orange-500 to-amber-500", icon: Wrench },
  "Computer Literacy": { color: "text-gray-400", gradient: "from-gray-500 to-slate-500", icon: GraduationCap },
}

export function CertificationsSection() {
  const certifications = [
    {
      title: "Java with DSA and System Design (PW)",
      provider: "Physics Wallah",
      date: "Sep 2024",
      category: "Programming",
      description: "Comprehensive course covering Java programming, data structures, algorithms, and system design principles",
      link: "#",
    },
    {
      title: "Full Stack Web Development (PW)",
      provider: "Physics Wallah",
      date: "Sep 2024",
      category: "Web Development",
      description: "Complete full-stack development course covering frontend and backend technologies",
      link: "#",
    },
    {
      title: "NIELIT CCC Certificate",
      provider: "NIELIT",
      date: "Mar 2023",
      category: "Computer Literacy",
      description: "Course on Computer Concepts certification from National Institute of Electronics & Information Technology",
      link: "#",
    },
    {
      title: "Fundamentals of Cybersecurity, Networking for Cyber Professionals",
      provider: "IBM/Zscaler",
      date: "Feb 2025",
      category: "Security",
      description: "Foundational cybersecurity concepts and zero trust cloud security principles",
      link: "#",
    },
    {
      title: "TechSaksham Program – Microsoft & SAP",
      provider: "Microsoft & SAP",
      date: "2024",
      category: "Technology",
      description: "Industry initiative for skill development in emerging technologies and digital transformation",
      link: "#",
    },
    {
      title: "AICTE Internship on AI: Transformative Learning",
      provider: "AICTE",
      date: "2024",
      category: "Artificial Intelligence",
      description: "Government-recognized internship program focusing on AI and machine learning applications",
      link: "#",
    },
  ]

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
          {certifications.map((cert, index) => {
            const config = categoryConfig[cert.category] ?? { color: "text-indigo-400", gradient: "from-indigo-500 to-violet-500", icon: Award }
            const IconComponent = config.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group h-full"
              >
                <Card className="h-full relative overflow-hidden border-border/40 transition-all duration-300 group-hover:shadow-xl group-hover:border-indigo-500/30">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${config.gradient}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.15 }}
                        transition={{ duration: 0.2 }}
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${config.color} border-current/30`}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base leading-tight mb-1 group-hover:text-indigo-400 transition-colors duration-300">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="font-semibold text-sm" style={{ color: "var(--accent-indigo)" }}>
                      {cert.provider}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cert.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-200"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
