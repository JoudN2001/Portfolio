"use client"

import { useTranslations } from "next-intl"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 bg-background py-6">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear}. Made by Joud Kayyali
        </p>
      </div>
    </footer>
  )
}
