"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const typeColors: Record<string, string> = {
  Internship: "from-blue-500 to-indigo-500",
  Leadership: "from-violet-500 to-purple-500",
  Extracurricular: "from-cyan-500 to-teal-500",
}

const typeBg: Record<string, string> = {
  Internship: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Leadership: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  Extracurricular: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Web Design & Development Intern",
      company: "BrizTech Infosystems Pvt. Ltd., Ranchi",
      period: "Oct–Nov 2023",
      type: "Internship",
      description: [
        "Built scalable web applications using HTML, CSS, JavaScript, Node.js, Express.js, and databases (MongoDB/MySQL)",
        "Designed intuitive UI/UX interfaces using Figma and Photoshop with SEO optimization",
        "Collaborated with development team to deliver client projects on time",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL", "Figma", "Photoshop"],
    },
    {
      title: "Placement Committee Member",
      company: "SRM Institute of Science & Technology",
      period: "2025–Present",
      type: "Leadership",
      description: [
        "Organized placement drives and career development events for students",
        "Coordinated with companies for recruitment processes and campus interviews",
        "Mentored junior students in interview preparation and career guidance",
      ],
      technologies: ["Leadership", "Event Management", "Career Counseling"],
    },
    {
      title: "Tech Team Member",
      company: "Livewire Club, SRM IST",
      period: "2024–Present",
      type: "Extracurricular",
      description: [
        "Organized technical festivals, hackathons, and workshops for students",
        "Developed web applications and technical solutions for club events",
        "Mentored students in various programming languages and technologies",
      ],
      technologies: ["Event Organization", "Web Development", "Mentoring", "Technical Leadership"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">My professional journey and leadership roles</p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative sm:pl-16 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 hidden sm:flex">
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${typeColors[experience.type]} border-2 border-background shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:shadow-indigo-500/40`}
                  />
                </div>

                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <Card className="card-hover border-border/40 overflow-hidden group-hover:border-indigo-500/30 transition-all duration-300">
                    <div className={`h-0.5 w-full bg-gradient-to-r ${typeColors[experience.type]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <CardTitle className="flex items-center gap-3 mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                            <Briefcase className="w-5 h-5 text-primary" />
                            {experience.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 text-base">
                            <Users className="w-4 h-4" />
                            {experience.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${typeBg[experience.type]}`}>
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                            <ArrowRight className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {experience.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.08 }}
                            className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors duration-200 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
