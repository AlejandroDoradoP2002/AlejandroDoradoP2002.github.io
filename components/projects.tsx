"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "FinTrack",
    subtitle: "Personal Finance Web App",
    description:
      "Full-stack web application for personal finance tracking. Implemented secure authentication, MVC architecture, and RESTful APIs for financial transaction processing.",
    tags: ["React", "Django", "MySQL", "REST APIs", "JWT", "UML"],
    github: "https://github.com/AlejandroDoradoP2002/fintrack",
    demo: null,
    gradient: "from-chart-1/20 to-chart-2/20",
  },
  {
    title: "AI JobShield",
    subtitle: "Fake Job Posting Detector",
    description:
      "End-to-end machine learning application that analyzes 17,000+ job postings and flags potential fraud with ~85% accuracy. Built with scikit-learn and deployed via Streamlit.",
    tags: ["Python", "scikit-learn", "Streamlit", "NLP"],
    github: "https://github.com/AlejandroDoradoP2002/ai-jobshield",
    demo: "https://ai-jobshield-my3qgnxa8prybogdf9ctwx.streamlit.app/",
    gradient: "from-chart-2/20 to-chart-3/20",
  },
  {
    title: "Socket Servers",
    subtitle: "Concurrent & Iterative Architecture",
    description:
      "Implemented concurrent and iterative client-server architectures in Java using sockets and threads. Applied OOP design patterns for extensible server behaviors.",
    tags: ["Java", "Multi-threading", "Networking", "Linux"],
    github: "https://github.com/AlejandroDoradoP2002/socket-servers",
    demo: null,
    gradient: "from-chart-3/20 to-chart-4/20",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are a few representative projects showcasing my skills in full-stack development, machine learning, and
            systems programming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 group flex flex-col"
            >
              <div className="space-y-4 flex-1">
                <div
                  className={`h-32 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform`}
                >
                  <div className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] opacity-50">
                    {project.title.substring(0, 2)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-primary">{project.subtitle}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                {project.github && (
                  <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild size="sm" className="flex-1 gradient-primary">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/AlejandroDoradoP2002" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
