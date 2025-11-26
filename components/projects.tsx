"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2, Sparkles, Database } from "lucide-react"
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"
import Image from "next/image"

const projectIcons = {
  FinTrack: Code2,
  "AI JobShield": Sparkles,
  "Socket Servers": Database,
}

const projects = [
  {
    title: "FinTrack",
    subtitle: "Personal Finance Web App",
    description:
      "Full-stack web application for personal finance tracking. Implemented secure authentication, MVC architecture, and RESTful APIs for financial transaction processing.",
    tags: ["React", "Django", "MySQL", "REST APIs", "JWT", "UML"],
    github: "https://github.com/AlejandroDoradoP2002/fintrack",
    demo: null,
    gradient: "from-chart-1/20 via-chart-1/10 to-chart-2/20",
    image: "/finance-dashboard-interface.png",
  },
  {
    title: "AI JobShield",
    subtitle: "Fake Job Posting Detector",
    description:
      "End-to-end machine learning application that analyzes 17,000+ job postings and flags potential fraud with ~85% accuracy. Built with scikit-learn and deployed via Streamlit.",
    tags: ["Python", "scikit-learn", "Streamlit", "NLP"],
    github: "https://github.com/AlejandroDoradoP2002/ai-jobshield",
    demo: "https://ai-jobshield-my3qgnxa8prybogdf9ctwx.streamlit.app/",
    gradient: "from-chart-2/20 via-chart-2/10 to-chart-3/20",
    image: "/ai-machine-learning-analysis.jpg",
  },
  {
    title: "Socket Servers",
    subtitle: "Concurrent & Iterative Architecture",
    description:
      "Implemented concurrent and iterative client-server architectures in Java using sockets and threads. Applied OOP design patterns for extensible server behaviors.",
    tags: ["Java", "Multi-threading", "Networking", "Linux"],
    github: "https://github.com/AlejandroDoradoP2002/socket-servers",
    demo: null,
    gradient: "from-chart-3/20 via-chart-3/10 to-chart-4/20",
    image: "/network-server-architecture.jpg",
  },
]

export function Projects() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)
  const projectAnimations = projects.map((_, index) => useScrollAnimation(0.2))

  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto" ref={sectionRef}>
        <div
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Software Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Representative projects showcasing my skills in full-stack development, machine learning, and systems
            programming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const { ref, isVisible } = projectAnimations[index]
            const Icon = projectIcons[project.title as keyof typeof projectIcons]
            return (
              <Card
                key={index}
                ref={ref}
                className={`overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4 flex flex-col h-full">
                  <div
                    className={`relative h-40 -m-6 mb-0 rounded-t-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 h-20 w-20 rounded-2xl bg-card/90 backdrop-blur-sm border-2 border-border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-3 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="relative h-32 -mx-6 -mb-6 mt-4 rounded-b-lg overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      variant="secondary"
                      className="flex-1 bg-card/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 gradient-primary shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group hover:bg-card hover:scale-105 transition-all duration-300 shadow-lg bg-transparent"
          >
            <a href="https://github.com/AlejandroDoradoP2002" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
