"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ExternalLink, GitMerge, FileCode, Layers, Cpu, Code2, AppWindow } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

export function Projects() {
  const t = useTranslations('Projects')
  
  // Mapping project IDs to their specific icons and URLs from the user's CV
  const projectData = [
    {
      id: "startup",
      icon: <Layers className="w-6 h-6 text-primary" />,
      repo: "https://github.com/JoudN2001/Startup-Investment-Platform",
      lucidFlow: "https://lucid.app/lucidchart/72062dc7-26e1-49d7-8713-306f64dbdccf/edit",
      lucidSchema: "https://lucid.app/lucidchart/33eff361-3831-4b43-bf38-9b7e1ec494a3/edit"
    },
    {
      id: "algorithm",
      icon: <GitMerge className="w-6 h-6 text-accent" />,
      repo: "https://github.com/JoudN2001/Algorithm_Project"
    },
    {
      id: "os",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      repo: "https://github.com/JoudN2001/OS-Scheduler-Simulation-Project"
    },
    {
      id: "library",
      icon: <FileCode className="w-6 h-6 text-accent" />,
      repo: "https://github.com/JoudN2001/Library_Management_in_Java_GUI"
    },
    {
      id: "weather",
      icon: <AppWindow className="w-6 h-6 text-primary" />,
      repo: "https://github.com/JoudN2001/Weather-App"
    },
    {
      id: "browser",
      icon: <Code2 className="w-6 h-6 text-accent" />,
      repo: "https://github.com/JoudN2001/Browser-extension-manager-UI"
    }
  ]

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
            {t('title')}
            <div className="flex-1 h-px bg-border ms-4"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between p-6 h-full rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit">
                      {project.icon}
                    </div>
                    <div className="flex gap-3">
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {t(`items.${project.id}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {t(`items.${project.id}.description`)}
                  </p>
                </div>
                
                {project.id === "startup" && (
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-border/50">
                    <a href={project.lucidFlow} target="_blank" rel="noreferrer" className="text-xs font-mono text-primary flex items-center gap-1 hover:underline">
                      <ExternalLink className="w-3 h-3" /> System Flow
                    </a>
                    <a href={project.lucidSchema} target="_blank" rel="noreferrer" className="text-xs font-mono text-accent flex items-center gap-1 hover:underline">
                      <ExternalLink className="w-3 h-3" /> DB Schema
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
