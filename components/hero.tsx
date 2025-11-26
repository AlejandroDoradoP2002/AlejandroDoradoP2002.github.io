"use client"

import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 animate-pulse-slow" />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm hover:border-primary/50 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-muted-foreground">Available for opportunities</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
                <span className="gradient-text animate-gradient">Alejandro Dorado</span>
              </h1>

              <div className="space-y-2">
                <p className="text-2xl lg:text-3xl font-semibold text-foreground">Computer Science Student</p>
                <p className="text-lg text-muted-foreground">University of North Florida • GPA 3.75</p>
                <p className="text-lg text-primary font-medium">Graduating December 2025</p>
              </div>
            </div>

            <div className="space-y-4 py-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hey, how's it going? I'm Alejandro — I build secure, data-driven applications and systems, from backend
                services to ML models.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about solving real problems with clean code and thoughtful design. Currently seeking
                full-time opportunities in software engineering, data science, or security operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="gradient-primary group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover:bg-card hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-sm bg-transparent"
              >
                <a
                  href="https://github.com/AlejandroDoradoP2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-sm bg-transparent"
              >
                <a
                  href="https://www.linkedin.com/in/alejandrodorado"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 shadow-sm bg-transparent"
              >
                <a href="mailto:alejandro.dorado@unf.edu" aria-label="Email">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Background gradient blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-chart-2/20 to-chart-3/30 rounded-3xl blur-2xl scale-95 animate-pulse-slow" />

            {/* Main image card with layered effect */}
            <div className="relative">
              <Card className="p-2 bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm overflow-hidden group">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-chart-2/10">
                  {/* Placeholder for actual photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/assets/alejandro.jpg"
                      alt="Alejandro Dorado"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Card>

              <Card className="absolute -bottom-6 -right-6 p-4 bg-card/95 backdrop-blur-md border-2 border-border shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <p className="font-semibold">Jacksonville, FL</p>
                    <p className="text-muted-foreground text-xs">Open to relocate</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
