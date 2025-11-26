import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using Inter for body and Space Grotesk for headings
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Alejandro Dorado | Computer Science @ UNF",
  description:
    "Computer Science student at UNF specializing in full-stack development, machine learning, and security operations. Building secure, data-driven applications.",
  generator: "v0.app",
  keywords: [
    "Alejandro Dorado",
    "Computer Science",
    "UNF",
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Security",
  ],
  authors: [{ name: "Alejandro Dorado" }],
  openGraph: {
    title: "Alejandro Dorado | Computer Science @ UNF",
    description: "Building secure, data-driven applications and systems",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
