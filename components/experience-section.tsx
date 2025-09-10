"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Calendar } from "lucide-react"
import { motion } from "framer-motion"

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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and leadership roles
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-3 mb-2">
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
                      <Badge variant="outline">{experience.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
