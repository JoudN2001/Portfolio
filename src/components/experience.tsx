"use client"

import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import { experiences } from "@/constants/data"

export function Experience() {
  const locale = useLocale()
  const isAr = locale === 'ar'

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
          {isAr ? "الخبرات المهنية" : "Experience"}
          <div className="flex-1 h-px bg-border ms-4"></div>
        </h2>

        <div className="relative border-s-2 border-slate-200 dark:border-border/60 ms-4 md:ms-6 py-6 space-y-16">
          {experiences.map((exp, index) => {
            const role = isAr ? exp.roleAr : exp.role
            const company = exp.company
            const date = isAr ? exp.periodAr : exp.period
            const descBullets = isAr ? exp.bulletsAr : exp.bullets

            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="relative ps-8 md:ps-12"
              >
                {/* Glowing Dot */}
                <div className="absolute -start-[9px] top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_12px_rgba(16,185,129,0.7)] border-4 border-slate-50 dark:border-background z-10"></div>
                
                <div className="flex flex-col gap-2 mb-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-primary/10 text-slate-600 dark:text-primary font-mono text-sm w-fit mb-2">
                    {date}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-foreground">
                    {role}
                  </h3>
                  <p className="text-lg md:text-xl text-primary font-medium">
                    {company}
                  </p>
                </div>
                
                <ul className="space-y-4 mt-6">
                  {descBullets.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-muted-foreground text-base md:text-lg leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-accent/50 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
