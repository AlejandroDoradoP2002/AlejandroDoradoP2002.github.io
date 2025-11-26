"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm open to new opportunities in software engineering, security operations, or data roles. Feel free to
            reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border/50">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:alejandro.dorado@unf.edu"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      alejandro.dorado@unf.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Jacksonville, FL · Open to relocate</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

                <div className="space-y-2">
                  <p className="font-medium mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="icon">
                      <a href="https://github.com/AlejandroDoradoP2002" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                      <a href="https://www.linkedin.com/in/alejandrodorado" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-2 border-border/50">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Opportunity / Collaboration" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={5} />
              </div>

              <Button type="submit" className="w-full gradient-primary">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
