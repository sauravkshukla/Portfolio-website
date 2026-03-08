"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Brain, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function GenAIProjectsSection() {
  const projects = [
    {
      title: "AstraSentinel",
      description:
        "An AI-powered crisis detection and emotional response system that analyzes conversations in real time to detect distress signals and provide intelligent support. It integrates AI agents, emergency detection, and therapist recommendations to assist users during critical situations.",
      githubLink: "https://github.com/sauravkshukla/AstraSentinel",
      demoLink: "",
      skills: ["Python", "LangChain", "OpenAI API", "NLP", "AI Agents", "Crisis Detection"],
      tools: ["LangGraph", "Hugging Face", "Vector Databases", "FastAPI", "WebSocket"],
      accentColor: "from-violet-500 to-purple-600",
      icon: Brain,
    },
    {
      title: "AI Agent for Corporate Workload",
      description:
        "An advanced collection of enterprise-grade n8n workflow automation templates designed to optimize and accelerate various business processes. These workflows automate HR management, intelligent data analysis, sales operations, and other tasks using AI-driven automation.",
      githubLink: "https://github.com/sauravkshukla/AI-Agent-automation.git",
      demoLink: "",
      skills: ["Python", "LangChain", "LLM APIs", "AI Agents", "Automation", "Workflow Design"],
      tools: ["n8n", "OpenAI API", "Vector Databases", "APIs", "Automation Tools"],
      accentColor: "from-cyan-500 to-blue-600",
      icon: Zap,
    },
  ]

  return (
    <section id="genai-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            Innovative projects leveraging Generative AI, automation, and intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group"
            >
              <Card className="h-full relative overflow-hidden border-border/40 transition-all duration-300 group-hover:border-violet-500/40 group-hover:shadow-xl group-hover:shadow-violet-500/10">
                {/* Animated top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accentColor} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300`}>
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                  {/* Skills Used */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Skills Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.08 }}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20 transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Tools Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <motion.span
                          key={tool}
                          whileHover={{ scale: 1.08 }}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors cursor-default"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-1">
                    {project.githubLink && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="hover:bg-violet-500/10 hover:border-violet-500/50 hover:text-violet-400 transition-all duration-200"
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demoLink && (
                      <Button asChild size="sm" className="bg-gradient-to-r from-violet-500 to-purple-600 hover:opacity-90">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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