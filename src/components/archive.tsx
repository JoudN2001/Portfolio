"use client"

import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import { projects } from "@/constants/data"
import { MonitorPlay } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

export function Archive() {
  const locale = useLocale()
  const isAr = locale === 'ar'

  // Archive = all non-flagship projects from the unified array
  const archiveProjects = projects.filter(p => !p.isFlagship)

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-background border-t border-slate-100 dark:border-border/20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-16">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
              {isAr ? "مشاريع إضافية" : "Other Work"}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-foreground tracking-tight">
              {isAr ? "أرشيف المشاريع" : "Project Archive"}
            </h2>
            <p className="text-slate-500 dark:text-muted-foreground font-mono text-sm max-w-lg">
              {isAr
                ? "مشاريع إضافية، تجارب، ومساهمات لمن يريد التعمق أكثر."
                : "Additional projects, experiments, and contributions for those who want to dig deeper."}
            </p>
          </div>

          {/* Table */}
          <div className="w-full">
            {/* Header – hidden on mobile */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b-2 border-slate-200 dark:border-border/60 text-slate-400 dark:text-muted-foreground/60 font-mono text-xs uppercase tracking-widest">
              <div className="col-span-1">{isAr ? "السنة" : "Year"}</div>
              <div className="col-span-4">{isAr ? "المشروع" : "Project"}</div>
              <div className="col-span-5">{isAr ? "التقنيات" : "Built With"}</div>
              <div className="col-span-2 text-end">{isAr ? "الروابط" : "Links"}</div>
            </div>

            {/* Rows */}
            <ul>
              {archiveProjects.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-3 py-5 border-b border-slate-100 dark:border-border/25 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-200 px-2 -mx-2 rounded-lg"
                >
                  {/* Year */}
                  <div className="hidden md:flex md:col-span-1 items-center text-primary font-mono text-sm font-medium">
                    {item.year}
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <span className="md:hidden text-primary font-mono text-xs font-medium shrink-0">{item.year}</span>
                    <span className="font-semibold text-slate-900 dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors text-base leading-snug">
                      {isAr ? item.titleAr : item.title}
                    </span>
                  </div>

                  {/* Tech pills */}
                  <div className="md:col-span-5 flex flex-wrap items-center gap-1.5">
                    {item.tech.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-muted/40 text-xs font-mono text-slate-600 dark:text-muted-foreground border border-slate-200 dark:border-border/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="md:col-span-2 flex md:justify-end items-center gap-4">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                        className="text-slate-400 dark:text-muted-foreground/60 hover:text-accent dark:hover:text-accent transition-colors"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Demo"
                        className="text-slate-400 dark:text-muted-foreground/60 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <MonitorPlay className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
