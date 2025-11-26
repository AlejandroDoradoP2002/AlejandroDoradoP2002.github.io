export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alejandro Dorado. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
