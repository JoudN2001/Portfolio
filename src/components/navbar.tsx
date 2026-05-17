"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"

export function Navbar() {
  const t = useTranslations('Navigation')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-xl flex items-center gap-2">
          <span className="text-primary">{"<"}</span>
          Joud
          <span className="text-primary">{"/>"}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#experience" className="transition-colors hover:text-primary">{t('experience')}</Link>
          <Link href="#projects" className="transition-colors hover:text-primary">{t('projects')}</Link>
          <Link href="#archive" className="transition-colors hover:text-primary">{t('archive')}</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">{t('contact')}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
