"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    label: "Impact",
    value: "17k+",
    description: "Job postings analyzed (AI JobShield)",
  },
  {
    label: "Efficiency",
    value: "60%",
    description: "Manual reporting time reduced",
  },
  {
    label: "Optimization",
    value: "4.8%",
    description: "Recruitment selection efficiency",
  },
  {
    label: "Scale",
    value: "900+",
    description: "Lab users supported / semester",
  },
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">Snapshot</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A concise overview of what I build and the outcomes I deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-2">
                <div className="text-xs text-primary font-semibold uppercase tracking-wider">{stat.label}</div>
                <div className="text-4xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
