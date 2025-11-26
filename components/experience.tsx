import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Programming Assistant",
    company: "University of North Florida",
    period: "Feb 2024 – Present",
    location: "Jacksonville, FL",
    description: [
      "Supervise a high-traffic student game lab supporting 900+ users per semester.",
      "Provide first-line troubleshooting and system support for lab users.",
    ],
  },
  {
    title: "Data Analysis Assistant",
    company: "SalesLand Colombia SAS",
    period: "Aug 2022 – Jan 2023",
    location: "Bogotá, Colombia (Remote/Hybrid)",
    description: [
      "Automated reporting scripts in Python — reduced manual effort by 60%.",
      "Optimized analytics for recruitment selection, improving efficiency by 4.8%.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience in programming support and data analysis.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
