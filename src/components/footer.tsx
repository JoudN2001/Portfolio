"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-slate-200 dark:border-border/40 bg-slate-50 dark:bg-background py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-3 text-center">
        <img
          src="/Signature.png"
          alt="Joud Kayyali"
          className="h-12 w-auto opacity-70 dark:invert dark:opacity-60 mb-1"
        />
        <p className="text-sm text-slate-500 dark:text-muted-foreground font-mono">
          &copy; {currentYear}. Engineered by Joud Kayyali
        </p>
      </div>
    </footer>
  )
}
