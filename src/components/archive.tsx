"use client"

import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import { archiveRepositories } from "@/constants/data"
import { ExternalLink, MonitorPlay } from "lucide-react"

export function Archive() {
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
          <span className="text-accent font-mono text-2xl">#</span>
          {isAr ? "أرشيف مشاريع أخرى" : "Other Projects Archive"}
          <div className="flex-1 h-px bg-border ms-4"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {archiveRepositories.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-border/50 bg-muted/10 hover:bg-muted/30 hover:border-accent/30 transition-colors shadow-sm"
            >
              <div>
                <div className="flex justify-end items-center gap-2 mb-4">
                  {item.url && (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="GitHub Repo"
                      className="text-muted-foreground hover:text-accent transition-colors p-2 rounded-full hover:bg-accent/10"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {item.demo && (
                    <a 
                      href={item.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      title="Live Demo"
                      className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                    >
                      <MonitorPlay className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors mb-2">
                  {isAr ? item.titleAr : item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
