import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming & Development",
    skills: ["Java", "Python", "JavaScript", "HTML/CSS", "Bash/Shell", "OOP", "SDLC"],
  },
  {
    title: "Frameworks & Technologies",
    skills: ["React", "Django", "REST APIs", "Spring", "JWT", "Multi-threading", "Socket Programming"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQL", "Database Design", "Normalization", "Query Optimization"],
  },
  {
    title: "Security & Systems",
    skills: ["Splunk", "SIEM", "Intrusion Detection", "Fortinet", "Linux", "Windows", "TCP/IP", "Network Analysis"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the programming languages, frameworks, and tools I use to build robust
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
