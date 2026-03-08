"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Star, Users } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const iconGradients: Record<string, string> = {
  "text-yellow-500": "from-yellow-400 to-orange-500",
  "text-orange-500": "from-orange-400 to-red-500",
  "text-blue-500": "from-blue-400 to-indigo-500",
  "text-green-500": "from-green-400 to-emerald-500",
  "text-purple-500": "from-purple-400 to-violet-500",
}

function AchievementCard({ achievement, index }: { achievement: { title: string; event: string; award: string; icon: React.ElementType; color: string; description: string }, index: number }) {
  const gradient = iconGradients[achievement.color] || "from-indigo-400 to-violet-500"

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group h-full"
    >
      <Card className="h-full relative overflow-hidden border-border/40 transition-all duration-300 group-hover:shadow-xl group-hover:border-transparent">
        {/* Gradient border on hover via pseudo-card */}
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: "1px" }}>
          <div className="absolute inset-px rounded-lg bg-card" />
        </div>

        <CardHeader className="relative">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.15 }}
              transition={{ duration: 0.2 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
            >
              <achievement.icon className="w-6 h-6 text-white" />
            </motion.div>
            <Badge variant="outline" className="text-xs">{achievement.award}</Badge>
          </div>
          <CardTitle className="text-lg leading-tight group-hover:text-indigo-400 transition-colors duration-300">
            {achievement.title}
          </CardTitle>
          <CardDescription className="font-medium">{achievement.event}</CardDescription>
        </CardHeader>

        <CardContent className="relative">
          <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

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
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
