import { Card } from "@/components/ui/card"
import { Code2, Database, Shield, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end applications with React, Django, and modern web technologies.",
  },
  {
    icon: Sparkles,
    title: "Machine Learning",
    description: "Developing ML models for real-world applications like fraud detection and data analysis.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Architecting normalized schemas and optimizing queries for scalable data systems.",
  },
  {
    icon: Shield,
    title: "Security Operations",
    description: "Learning SOC workflows, log analysis, and security monitoring through hands-on labs.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I'm a Computer Science student at the University of North Florida, graduating in December 2025. I focus on
            building secure, scalable software that solves real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
