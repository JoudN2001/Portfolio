"use client"

import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import { projects } from "@/constants/data"
import { ExternalLink, GitMerge, FileCode, Layers, Cpu, Code2, AppWindow, ListTodo, MonitorPlay } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

const getIcon = (id: string) => {
  switch (id) {
    case "startup-platform": return <Layers className="w-6 h-6 text-primary" />
    case "algorithm-project": return <GitMerge className="w-6 h-6 text-accent" />
    case "os-scheduler": return <Cpu className="w-6 h-6 text-primary" />
    case "library-system": return <FileCode className="w-6 h-6 text-accent" />
    case "weather-app": return <AppWindow className="w-6 h-6 text-primary" />
    case "extension-manager": return <Code2 className="w-6 h-6 text-accent" />
    case "task-manager": return <ListTodo className="w-6 h-6 text-primary" />
    default: return <Code2 className="w-6 h-6 text-primary" />
  }
}

export function Projects() {
  const locale = useLocale()
  const isAr = locale === 'ar'
  
  return (
    <section className="py-24 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-2xl">#</span>
            {isAr ? "معرض المشاريع الهندسية" : "Engineering Showcase"}
            <div className="flex-1 h-px bg-border ms-4"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const colSpan = (project.id === "startup-platform" || project.id === "extension-manager") ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative flex flex-col justify-between p-8 rounded-3xl border border-border bg-background hover:bg-muted/10 transition-colors shadow-sm hover:shadow-xl ${colSpan}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-4 rounded-xl bg-primary/10 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow">
                        {getIcon(project.id)}
                      </div>
                      <div className="flex gap-2 z-10">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" title="GitHub Repo" className="p-2 rounded-full bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all text-muted-foreground">
                            <GithubIcon className="w-5 h-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo" className="p-2 rounded-full bg-muted/50 hover:bg-accent/20 hover:text-accent transition-all text-muted-foreground">
                            <MonitorPlay className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {isAr ? project.titleAr : project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-muted/50 rounded-full text-xs font-mono text-foreground border border-border/50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-8">
                      {isAr ? project.descriptionAr : project.description}
                    </p>
                  </div>
                  
                  {project.extraLinks && project.extraLinks.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-border/50">
                      {project.extraLinks.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noreferrer" className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 transition-colors ${i % 2 === 0 ? 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground' : 'bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground'}`}>
                          <ExternalLink className="w-4 h-4" /> {isAr ? link.labelAr : link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
