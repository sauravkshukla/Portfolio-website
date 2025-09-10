"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, BarChart } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const webProjects = [
    {
      title: "Axion",
      description:
        "SaaS for AI-powered code generation with Next.js, Tailwind, Google AI, Convex DB, PayPal API, and Sandpack integration.",
      technologies: ["Next.js", "Tailwind CSS", "Google AI", "Convex DB", "PayPal API"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "https://axion-demo.vercel.app", // Customizable
    },
    {
      title: "Carrier Connect",
      description: "Job portal with MongoDB, Express.js, Auth0 authentication, advanced filters, and responsive UI.",
      technologies: ["MongoDB", "Express.js", "Auth0", "React", "Node.js"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
    {
      title: "RemoteReady",
      description: "Full-stack AI platform to recommend remote jobs using OpenAI, LangChain, FastAPI, and FAISS.",
      technologies: ["OpenAI", "LangChain", "FastAPI", "FAISS", "Python"],
      category: "AI Platform",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "https://remoteready-demo.vercel.app", // Customizable
    },
    {
      title: "AI Agent for Corporate Workload",
      description: "Automated HR & Sales workflows using Pinecone, Gemini, and ElevenLabs for voice integration.",
      technologies: ["Pinecone", "Gemini", "ElevenLabs", "Python", "AI"],
      category: "AI Automation",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
    {
      title: "Gemini AI Clone",
      description: "React-based chatbot application mimicking Google Gemini AI interface and functionality.",
      technologies: ["React", "JavaScript", "AI API", "CSS3"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "https://gemini-clone-demo.vercel.app", // Customizable
    },
    {
      title: "Indian Culture Website",
      description: "Comprehensive website showcasing the rich cultural heritage of India with interactive elements.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "https://indian-culture-demo.vercel.app", // Customizable
    },
  ]

  const dataProjects = [
    {
      title: "End-to-End Churn Analysis",
      description:
        "SQL Server ETL pipeline with Twilio API alerts and video capture integration for customer retention.",
      technologies: ["SQL Server", "Twilio API", "Python", "ETL", "Analytics"],
      category: "Data Science",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
    {
      title: "SMS Spam Detection System",
      description: "NLP-based Naive Bayes classifier with TF-IDF achieving 96% test accuracy for spam detection.",
      technologies: ["Python", "NLP", "Naive Bayes", "TF-IDF", "Scikit-learn"],
      category: "Machine Learning",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "https://spam-detection-demo.vercel.app", // Customizable
    },
    {
      title: "IPL Analysis Dashboard",
      description: "Power BI dashboard with KPIs including Orange Cap, Purple Cap, and Team Standings analysis.",
      technologies: ["Power BI", "SQL", "Data Analytics", "DAX"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "https://ipl-dashboard-demo.vercel.app", // Customizable
    },
    {
      title: "Credit Card Dashboard",
      description: "Real-time financial insights dashboard using SQL and Power BI for transaction analysis.",
      technologies: ["SQL", "Power BI", "Financial Analytics", "DAX"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
    {
      title: "India Elections Result Analysis (Power BI)",
      description: "Visualized party performance, voter trends, and region-wise distribution.",
      technologies: ["Power BI", "Data Analytics", "DAX", "Political Data"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
    {
      title: "HR Analytics Dashboard (Power BI)",
      description: "Dashboard with attrition insights, employee performance, and workforce KPIs.",
      technologies: ["Power BI", "HR Analytics", "DAX", "Workforce Data"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
    {
      title: "Superstore Sales Dashboard (Power BI)",
      description: "Sales insights dashboard highlighting revenue trends, regional sales, and product performance.",
      technologies: ["Power BI", "Sales Analytics", "DAX", "Business Intelligence"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
    {
      title: "Ecommerce Sales Dashboard (Power BI)",
      description: "Dashboard with customer segmentation, sales KPIs, and profit margin analysis.",
      technologies: ["Power BI", "E-commerce Analytics", "DAX", "Customer Analytics"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla", // Customizable
      demoLink: "", // Can be empty if no demo available
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my web development and data science projects
          </p>
        </motion.div>

        {/* Web Development Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold">Web Development & AI Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
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

        {/* Data Analytics Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BarChart className="w-6 h-6 text-green-500" />
            <h3 className="text-2xl font-semibold">Data Analytics Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {dataProjects.map((project, index) => (
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
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
