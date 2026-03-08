"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, BarChart, Zap } from "lucide-react"
import { motion } from "framer-motion"

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
}

function ProjectCard({
  project,
  index,
  accentColor = "from-indigo-500 to-violet-500",
}: {
  project: {
    title: string
    description: string
    technologies: string[]
    category: string
    githubLink: string
    demoLink: string
  }
  index: number
  accentColor?: string
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group h-full"
    >
      <Card className="h-full relative overflow-hidden border-border/40 transition-all duration-300 group-hover:border-indigo-500/40 group-hover:shadow-xl group-hover:shadow-indigo-500/10">
        {/* Top gradient accent line */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <CardHeader>
          <div className="flex justify-between items-start mb-1">
            <CardTitle className="text-lg leading-snug group-hover:text-indigo-400 transition-colors duration-300">
              {project.title}
            </CardTitle>
            <Badge variant="outline" className="text-xs flex-shrink-0 ml-2">{project.category}</Badge>
          </div>
          <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08 }}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-200"
              onClick={() => project.githubLink && window.open(project.githubLink, "_blank")}
              disabled={!project.githubLink}
            >
              <Github className="w-3 h-3 mr-1" />
              View Code
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 bg-transparent hover:bg-violet-500/10 hover:border-violet-500/50 hover:text-violet-400 transition-all duration-200"
              onClick={() => project.demoLink && window.open(project.demoLink, "_blank")}
              disabled={!project.demoLink}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Live Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const webProjects = [
    {
      title: "Axion",
      description: "SaaS for AI-powered code generation with Next.js, Tailwind, Google AI, Convex DB, PayPal API, and Sandpack integration.",
      technologies: ["Next.js", "Tailwind CSS", "Google AI", "Convex DB", "PayPal API"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "https://axion-demo.vercel.app",
    },
    {
      title: "Carrier Connect",
      description: "Job portal with MongoDB, Express.js, Auth0 authentication, advanced filters, and responsive UI.",
      technologies: ["MongoDB", "Express.js", "Auth0", "React", "Node.js"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
    },
    {
      title: "RemoteReady",
      description: "Full-stack AI platform to recommend remote jobs using OpenAI, LangChain, FastAPI, and FAISS.",
      technologies: ["OpenAI", "LangChain", "FastAPI", "FAISS", "Python"],
      category: "AI Platform",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "https://remoteready-demo.vercel.app",
    },
    {
      title: "AI Agent for Corporate Workload",
      description: "Automated HR & Sales workflows using Pinecone, Gemini, and ElevenLabs for voice integration.",
      technologies: ["Pinecone", "Gemini", "ElevenLabs", "Python", "AI"],
      category: "AI Automation",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
    },
    {
      title: "Gemini AI Clone",
      description: "React-based chatbot application mimicking Google Gemini AI interface and functionality.",
      technologies: ["React", "JavaScript", "AI API", "CSS3"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "https://gemini-clone-demo.vercel.app",
    },
    {
      title: "Indian Culture Website",
      description: "Comprehensive website showcasing the rich cultural heritage of India with interactive elements.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      category: "Web Development",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "https://indian-culture-demo.vercel.app",
    },
  ]

  const dataProjects = [
    {
      title: "End-to-End Churn Analysis",
      description: "SQL Server ETL pipeline with Twilio API alerts and video capture integration for customer retention.",
      technologies: ["SQL Server", "Twilio API", "Python", "ETL", "Analytics"],
      category: "Data Science",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
    },
    {
      title: "SMS Spam Detection System",
      description: "NLP-based Naive Bayes classifier with TF-IDF achieving 96% test accuracy for spam detection.",
      technologies: ["Python", "NLP", "Naive Bayes", "TF-IDF", "Scikit-learn"],
      category: "Machine Learning",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "https://spam-detection-demo.vercel.app",
    },
    {
      title: "IPL Analysis Dashboard",
      description: "Power BI dashboard with KPIs including Orange Cap, Purple Cap, and Team Standings analysis.",
      technologies: ["Power BI", "SQL", "Data Analytics", "DAX"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "https://ipl-dashboard-demo.vercel.app",
    },
    {
      title: "Credit Card Dashboard",
      description: "Real-time financial insights dashboard using SQL and Power BI for transaction analysis.",
      technologies: ["SQL", "Power BI", "Financial Analytics", "DAX"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
    },
    {
      title: "India Elections Result Analysis",
      description: "Visualized party performance, voter trends, and region-wise distribution with Power BI.",
      technologies: ["Power BI", "Data Analytics", "DAX", "Political Data"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
    },
    {
      title: "HR Analytics Dashboard",
      description: "Dashboard with attrition insights, employee performance, and workforce KPIs.",
      technologies: ["Power BI", "HR Analytics", "DAX", "Workforce Data"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
    },
    {
      title: "Superstore Sales Dashboard",
      description: "Sales insights dashboard highlighting revenue trends, regional sales, and product performance.",
      technologies: ["Power BI", "Sales Analytics", "DAX", "Business Intelligence"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
    },
    {
      title: "Ecommerce Sales Dashboard",
      description: "Dashboard with customer segmentation, sales KPIs, and profit margin analysis.",
      technologies: ["Power BI", "E-commerce Analytics", "DAX", "Customer Analytics"],
      category: "Data Analytics",
      githubLink: "https://github.com/sauravkshukla",
      demoLink: "",
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

        {/* Web & AI Projects */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold">Web Development &amp; AI Projects</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} accentColor="from-blue-500 to-indigo-500" />
            ))}
          </div>
        </div>

        {/* Data Science Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <BarChart className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold">Data Science and Analytics</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {dataProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} accentColor="from-green-500 to-teal-500" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
