"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Star, Users } from "lucide-react"
import { motion } from "framer-motion"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Winner - National Level Hackathon",
      event: "Datathon 2025",
      award: "Best Innovator",
      icon: Trophy,
      color: "text-yellow-500",
      description: "Won first place in national-level data science hackathon for innovative AI solution",
    },
    {
      title: "Bronze Medal - PAN India Challenge",
      event: "Web Scraping Challenge",
      award: "18th Nationwide",
      icon: Medal,
      color: "text-orange-500",
      description: "Secured bronze medal and 18th position in nationwide web scraping competition",
    },
    {
      title: "Top 25 - AI Agent Competition",
      event: "UST Global Sight 2.0",
      award: "National Level",
      icon: Star,
      color: "text-blue-500",
      description: "Selected among top 25 participants in national AI agent development competition",
    },
    {
      title: "Internship Program",
      event: "Zscaler Zero Trust Cloud Security",
      award: "Selected Candidate",
      icon: Award,
      color: "text-green-500",
      description: "Successfully completed internship program in cloud security and zero trust architecture",
    },
    {
      title: "Leadership Role",
      event: "Placement Committee & Tech Club",
      award: "Active Member",
      icon: Users,
      color: "text-purple-500",
      description: "Serving as active member in placement committee and technical club leadership",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and accomplishments in competitions and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    <Badge variant="outline" className="text-xs">
                      {achievement.award}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{achievement.title}</CardTitle>
                  <CardDescription className="font-medium">{achievement.event}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
