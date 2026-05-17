"use client"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Mail } from "lucide-react"
import { personalInfo } from "@/constants/data"

export function Hero() {
  const t = useTranslations('Hero')
  const locale = useLocale()
  const isAr = locale === 'ar'

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background tech elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-accent font-medium tracking-tight">
              {t('greeting')}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              {isAr ? personalInfo.nameAr : personalInfo.name}
            </h1>
            <div className="mt-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg md:text-xl text-primary font-mono bg-primary/10 inline-block px-3 py-1.5 rounded-md border border-primary/20"
              >
                {isAr ? personalInfo.titleAr : personalInfo.title}
              </motion.p>
            </div>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                {t('viewWork')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#" download onClick={(e) => {
                e.preventDefault();
                alert("Resume download will be available soon!");
              }}>
                {t('downloadResume')} <Download className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="gap-2" asChild>
              <a href="#contact">
                {t('contactMe')} <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-8 relative"
        >
          {/* Portrait/Tech Vibe Graphic */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden bg-background/50 backdrop-blur-sm shadow-2xl group">
            {/* Pulsating Glowing orb effect behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[80px] rounded-full animate-pulse transition-all duration-700 group-hover:bg-primary/40 group-hover:scale-110"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/20 blur-[60px] rounded-full"></div>

            {/* Profile Image with Grayscale Filter */}
            <div className="relative z-10 w-full h-full flex items-end justify-center pt-8">
              <img
                src="/my photo.png"
                alt="Joud Kayyali"
                className="object-contain object-bottom w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.15]"
              />
            </div>

            {/* Signature Overlay */}
            <div className="absolute bottom-6 right-6 z-20 w-24 md:w-32 opacity-40 dark:invert transition-opacity duration-500 group-hover:opacity-70 pointer-events-none">
              <img src="/Signature.png" alt="Signature" className="w-full h-auto" />
            </div>

            {/* Minimalist bento box style elements floating */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 left-6 z-20 bg-background/80 backdrop-blur-md border border-border p-3 rounded-lg shadow-lg flex items-center gap-2 pointer-events-none"
            >
              <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
              <span className="text-xs font-mono">React / Next.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-6 z-20 bg-background/80 backdrop-blur-md border border-border p-3 rounded-lg shadow-lg flex items-center gap-2 pointer-events-none"
            >
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-xs font-mono">Full-Stack Arch</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
