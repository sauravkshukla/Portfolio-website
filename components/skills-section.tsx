"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Wrench } from "lucide-react"
import { motion } from "framer-motion"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript (Learning)"],
      color: "text-blue-500",
      glow: "group-hover:shadow-blue-500/20",
      badgeColor: "hover:bg-blue-500/20 hover:text-blue-400",
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "text-green-500",
      glow: "group-hover:shadow-green-500/20",
      badgeColor: "hover:bg-green-500/20 hover:text-green-400",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Express.js", "FastAPI"],
      color: "text-purple-500",
      glow: "group-hover:shadow-purple-500/20",
      badgeColor: "hover:bg-purple-500/20 hover:text-purple-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Pinecone DB"],
      color: "text-orange-500",
      glow: "group-hover:shadow-orange-500/20",
      badgeColor: "hover:bg-orange-500/20 hover:text-orange-400",
    },
    {
      title: "Data Science & Analytics",
      icon: Brain,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Power BI", "MS Excel"],
      color: "text-red-500",
      glow: "group-hover:shadow-red-500/20",
      badgeColor: "hover:bg-red-500/20 hover:text-red-400",
    },
    {
      title: "AI & Tools (Learning)",
      icon: Brain,
      skills: ["LangChain", "OpenAI", "Gemini", "N8N", "FAISS", "RAG", "Generative AI Tools", "LangGraph", "Hugging Face"],
      color: "text-cyan-500",
      glow: "group-hover:shadow-cyan-500/20",
      badgeColor: "hover:bg-cyan-500/20 hover:text-cyan-400",
    },
    {
      title: "Other Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vercel", "Postman", "Figma", "Photoshop"],
      color: "text-yellow-500",
      glow: "group-hover:shadow-yellow-500/20",
      badgeColor: "hover:bg-yellow-500/20 hover:text-yellow-400",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills &amp; Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full transition-all duration-300 card-hover border-border/50 group-hover:border-border group-hover:shadow-xl ${category.glow}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <category.icon className={`w-6 h-6 ${category.color} transition-all duration-300 group-hover:drop-shadow-lg`} />
                    </motion.div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + skillIndex * 0.03 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`text-sm cursor-default transition-all duration-200 ${category.badgeColor}`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
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
