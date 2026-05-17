"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function Experience() {
  const t = useTranslations('Experience')

  const experiences = [
    {
      id: "venturex",
      role: t('venturex.role'),
      company: t('venturex.company'),
      date: t('venturex.date'),
      description: t('venturex.description'),
    },
    {
      id: "shalati",
      role: t('shalati.role'),
      company: t('shalati.company'),
      date: t('shalati.date'),
      description: t('shalati.description'),
    }
  ]

  return (
    <section className="py-24 container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-2xl">#</span>
          {t('title')}
          <div className="flex-1 h-px bg-border ms-4"></div>
        </h2>

        <div className="relative border-s border-primary/30 ms-3 md:ms-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative ms-8 md:ms-12"
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-background rounded-full -start-[44px] md:-start-[60px] ring-4 ring-background border border-primary">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </span>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="flex items-center text-xl font-semibold text-foreground">
                  {exp.role} 
                  <span className="text-primary mx-2">@</span> 
                  {exp.company}
                </h3>
                <time className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                  {exp.date}
                </time>
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4 bg-primary/5 p-6 rounded-lg border border-primary/10">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
