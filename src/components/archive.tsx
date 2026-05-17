"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export function Archive() {
  const t = useTranslations('Archive')

  const archiveData = [
    { id: "campus", url: "https://github.com/JoudN2001/Campus-Connect" },
    { id: "todo", url: "https://github.com/JoudN2001/Todo-List-React" },
    { id: "portfolio", url: "https://github.com/JoudN2001/Build_portfolio_website_using_HTML_CSS" },
    { id: "youtube", url: "https://github.com/JoudN2001/Build_Youtube_clone" },
    { id: "opensource", url: "https://github.com/Yarob50/First-Contribution-ARABIC" }
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
          <span className="text-accent font-mono text-2xl">#</span>
          {t('title')}
          <div className="flex-1 h-px bg-border ms-4"></div>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse">
            <thead>
              <tr className="border-b border-border/50 text-muted-foreground text-sm font-mono uppercase tracking-wider text-start">
                <th className="py-4 px-4 hidden md:table-cell text-start font-medium">{t('table.year')}</th>
                <th className="py-4 px-4 text-start font-medium">{t('table.project')}</th>
                <th className="py-4 px-4 hidden lg:table-cell text-start font-medium">{t('table.tech')}</th>
                <th className="py-4 px-4 text-start font-medium">{t('table.link')}</th>
              </tr>
            </thead>
            <tbody>
              {archiveData.map((item, index) => (
                <motion.tr 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-border/30 hover:bg-muted/30 transition-colors group"
                >
                  <td className="py-4 px-4 font-mono text-sm text-primary/70 hidden md:table-cell">
                    {t(`items.${item.id}.year`)}
                  </td>
                  <td className="py-4 px-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t(`items.${item.id}.title`)}
                  </td>
                  <td className="py-4 px-4 font-mono text-sm text-muted-foreground hidden lg:table-cell">
                    {t(`items.${item.id}.tech`)}
                  </td>
                  <td className="py-4 px-4">
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 w-fit"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline-block font-mono text-xs">github.com</span>
                    </a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
