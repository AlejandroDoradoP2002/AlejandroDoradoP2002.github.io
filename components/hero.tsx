"use client"

import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-muted-foreground">Available for opportunities</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">
                Hi, I'm <span className="gradient-text">Alejandro Dorado</span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground">Computer Science @ UNF · Graduating Dec 2025</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I build secure, data-driven applications and systems — from backend services to ML models. Passionate
              about solving real problems with clean code and thoughtful design.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gradient-primary group">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Button asChild variant="ghost" size="sm">
                <a href="https://github.com/AlejandroDoradoP2002" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="https://www.linkedin.com/in/alejandrodorado" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="mailto:alejandro.dorado@unf.edu">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="animate-fade-in-up animation-delay-200">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-2 border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="aspect-square w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center text-6xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
                  AD
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">Quick Facts</h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">▹</span>
                    <span className="text-muted-foreground">UNF — B.S. Computer Science (Dec 2025)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">▹</span>
                    <span className="text-muted-foreground">GPA 3.75 · President's List</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">▹</span>
                    <span className="text-muted-foreground">OPT-eligible · Open to relocate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Jacksonville, FL · English · Spanish</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
