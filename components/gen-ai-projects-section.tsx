"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain } from "lucide-react"
import { motion } from "framer-motion"

export function GenAIProjectsSection() {
  const genAIProjects = [
    {
      title: "AstraSentinel",
      description:
        "AstraSentinel is an AI-powered crisis detection and emotional response system designed to detect distress signals in user conversations. The platform uses advanced natural language processing and generative AI to analyze emotional patterns, identify potential mental health crises, and provide intelligent responses or escalate emergencies when necessary. It integrates modern AI frameworks and APIs to create a real-time safety-focused conversational assistant.",
      technologies: ["Python", "LangChain", "OpenAI", "NLP", "Crisis Detection", "Generative AI"],
      category: "AI Safety",
      githubLink: "https://github.com/sauravkshukla/AstraSentinel",
      demoLink: "",
    },
    {
      title: "AI Agent for Corporate Workload",
      description: "An advanced collection of enterprise-grade n8n workflow automation templates designed to optimize and accelerate various business processes. Leveraging modern AI capabilities, these workflows automate HR management, intelligent data analysis, sales operations, and more. The system enables seamless integrations, scalable architecture, and efficient task automation, helping organizations streamline operations, reduce manual effort, and improve overall productivity.",
      technologies: ["Pinecone", "Gemini", "ElevenLabs", "Python", "AI", "n8n", "LangChain"],
      category: "AI Automation",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
  ]

  return (
    <section id="gen-ai-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Gen AI Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced AI and machine learning projects pushing the boundaries of modern technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genAIProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <Brain className="w-5 h-5 text-cyan-500" />
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(project.githubLink, "_blank")}
                      disabled={!project.githubLink}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(project.demoLink, "_blank")}
                      disabled={!project.demoLink}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </Button>
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
