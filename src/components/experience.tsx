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

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const role = isAr ? exp.roleAr : exp.role
            const company = exp.company
            const date = isAr ? exp.periodAr : exp.period
            const descBullets = isAr ? exp.bulletsAr : exp.bullets

            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 md:p-8 rounded-3xl border border-border bg-background hover:bg-muted/10 transition-colors shadow-sm group ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {role}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium mt-1">
                      {company}
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-mono text-sm inline-block w-fit">
                    {date}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {descBullets.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-base md:text-lg leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
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
