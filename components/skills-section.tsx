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
    },
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "text-green-500",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Express.js", "FastAPI"],
      color: "text-purple-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Pinecone DB"],
      color: "text-orange-500",
    },
    {
      title: "Data Science & Analytics",
      icon: Brain,
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Power BI", "MS Excel"],
      color: "text-red-500",
    },
    {
      title: "AI & Tools (Learning)",
      icon: Brain,
      skills: ["LangChain", "OpenAI", "Gemini", "N8N", "FAISS", "RAG", "Generative AI Tools", "LangGraph", "Hugging Face"],
      color: "text-cyan-500",
    },
    {
      title: "Other Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vercel", "Postman", "Figma", "Photoshop"],
      color: "text-yellow-500",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-6 h-6 ${category.color}`}
                    >
                      <category.icon className="w-full h-full" />
                    </motion.div>
                    <span className="text-lg group-hover:text-primary transition-colors">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-sm group-hover:bg-primary/20 transition-colors">
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
