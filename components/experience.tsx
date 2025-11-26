"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation"
import Image from "next/image"

const experiences = [
  {
    title: "Programming Assistant",
    company: "University of North Florida",
    period: "Feb 2024 – Present",
    location: "Jacksonville, FL",
    description: [
      "Supervise a high-traffic student game lab supporting 900+ users per semester",
      "Provide first-line troubleshooting and system support for lab users",
      "Maintain lab equipment and ensure smooth daily operations",
    ],
    tags: ["Technical Support", "Lab Management", "Linux"],
    image: "/university-computer-lab.jpg",
    logo: "UNF",
  },
  {
    title: "Data Analysis Assistant",
    company: "SalesLand Colombia SAS",
    period: "Aug 2022 – Jan 2023",
    location: "Bogotá, Colombia",
    description: [
      "Automated reporting scripts in Python — reduced manual effort by 60%",
      "Optimized analytics for recruitment selection, improving efficiency by 4.8%",
      "Developed data visualization dashboards for executive reporting",
    ],
    tags: ["Python", "Data Analysis", "Automation"],
    image: "/data-analysis-dashboard.png",
    logo: "SL",
  },
]

export function Experience() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)
  const experienceRefs = experiences.map(() => useScrollAnimation(0.2))

  return (
    <section id="experience" className="relative py-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <Image src="/abstract-tech-pattern.png" alt="" fill className="object-cover opacity-5" />
      </div>

      <div className="container mx-auto" ref={sectionRef}>
        <div
          className={`text-center space-y-4 mb-12 transition-all duration-1000 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="inline-block px-6 py-8 bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
            <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
              Internship Experiences
            </h2>
            <p className="text-muted-foreground text-lg">Click a card to learn more!</p>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const { ref, isVisible } = experienceRefs[index]
            return (
              <Card
                key={index}
                ref={ref}
                className={`overflow-hidden bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative h-64 md:h-auto min-h-[300px]">
                    <Image
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.company}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 group-hover:opacity-75 transition-opacity duration-500" />

                    {/* Logo overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="h-16 w-16 rounded-xl bg-card/90 backdrop-blur-sm border-2 border-border flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold gradient-text">{exp.logo}</span>
                      </div>
                    </div>

                    {/* Date badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-card/90 backdrop-blur-sm text-foreground border-border px-3 py-1">
                        <Calendar className="h-3 w-3 mr-2" />
                        {exp.period}
                      </Badge>
                    </div>
                  </div>

                  <div className="md:col-span-3 p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1 text-lg">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-4 bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
