"use client"

import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import { projects } from "@/constants/data"
import { ExternalLink, MonitorPlay, Layers } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

function ProjectImageOrMockup({ src, title }: { src?: string; title: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
      />
    )
  }
  return (
    <>
      <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
      <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl absolute top-1/4 left-1/4 group-hover:scale-110 transition-transform duration-700" />
      <div className="w-40 h-40 rounded-full bg-accent/20 blur-3xl absolute bottom-1/4 right-1/4 group-hover:scale-110 transition-transform duration-700" />
      <div className="relative z-0 flex flex-col items-center gap-3">
        <Layers className="w-14 h-14 text-slate-300 dark:text-muted-foreground/30 group-hover:scale-110 transition-transform duration-500" />
        <span className="text-xs font-mono text-slate-400 dark:text-muted-foreground/40 tracking-wider uppercase">
          Preview Not Available
        </span>
      </div>
    </>
  )
}

export function Projects() {
  const locale = useLocale()
  const isAr = locale === 'ar'

  const flagshipProjects = projects.filter(p => p.isFlagship)

  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-muted/10 border-y border-slate-200 dark:border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-20 max-w-2xl">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider uppercase">
              {isAr ? "أبرز الأعمال" : "Featured Work"}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-foreground tracking-tight">
              {isAr ? "معرض المشاريع الهندسية" : "Engineering Showcase"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-muted-foreground leading-relaxed">
              {isAr
                ? "مجموعة من أبرز المشاريع التي قمت بتطويرها. تركز على حلول معمارية قوية وتجربة مستخدم سلسة."
                : "A selection of flagship projects focused on robust architecture, clean code, and seamless user experiences."}
            </p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {flagshipProjects.map((project, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center group`}
                >
                  {/* Image / Mockup */}
                  <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden relative border border-slate-200 dark:border-border/50 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-muted/30 dark:to-muted/10 shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center">
                    <ProjectImageOrMockup src={project.image} title={isAr ? project.titleAr : project.title} />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start' : 'md:items-end md:text-end'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm mb-6 w-fit">
                      <span className="text-primary/60 font-normal">{project.year}</span>
                      <span>·</span>
                      <span>{isAr ? "مشروع مميز" : "Featured Project"}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {isAr ? project.titleAr : project.title}
                    </h3>

                    <div className="bg-white dark:bg-background border border-slate-200 dark:border-border/50 shadow-sm p-6 rounded-2xl mb-8 relative z-20 md:-mx-6 lg:-mx-10">
                      <p className="text-slate-600 dark:text-muted-foreground text-base md:text-lg leading-relaxed">
                        {isAr ? project.descriptionAr : project.description}
                      </p>
                    </div>

                    <div className={`flex flex-wrap gap-2 mb-8 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1.5 bg-slate-100 dark:bg-muted/50 rounded-full text-sm font-mono text-slate-700 dark:text-foreground border border-slate-200 dark:border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={`flex flex-wrap items-center gap-3 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-slate-700 dark:text-foreground bg-slate-100 dark:bg-muted/50 hover:bg-slate-200 dark:hover:bg-muted transition-colors border border-slate-200 dark:border-border"
                        >
                          <GithubIcon className="w-5 h-5" />
                          {isAr ? "المستودع" : "GitHub"}
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 hover:shadow-primary/40"
                        >
                          <MonitorPlay className="w-5 h-5" />
                          {isAr ? "معاينة حية" : "Live Demo"}
                        </a>
                      )}
                      {project.extraLinks?.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-accent hover:text-accent/80 transition-colors border border-accent/30 hover:border-accent/60"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {isAr ? link.labelAr : link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
