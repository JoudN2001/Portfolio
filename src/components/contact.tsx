"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Send } from "lucide-react"

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
)
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)

export function Contact() {
  const t = useTranslations('Contact')

  return (
    <section className="py-24 container mx-auto px-4 md:px-8 border-t border-border/40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
            <span className="text-primary font-mono text-2xl">#</span>
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 bg-muted/10 p-8 rounded-3xl border border-border/50">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">{t('socials')}</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:joud.kayale@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary"><Mail className="w-5 h-5" /></div> 
                  joud.kayale@gmail.com
                </a>
                <a href="tel:+962787423661" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary"><Phone className="w-5 h-5" /></div> 
                  +962 7 8742 3661
                </a>
                <a href="https://www.linkedin.com/in/joudn2001/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary"><LinkedinIcon className="w-5 h-5" /></div> 
                  LinkedIn
                </a>
                <a href="https://github.com/JoudN2001" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary"><GithubIcon className="w-5 h-5" /></div> 
                  GitHub
                </a>
                <a href="https://x.com/JoudN2001" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary"><TwitterIcon className="w-5 h-5" /></div> 
                  Twitter
                </a>
                <a href="https://www.instagram.com/joud303_n/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="p-2 rounded-md bg-primary/10 text-primary"><InstagramIcon className="w-5 h-5" /></div> 
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form className="space-y-6" onSubmit={(e) => { 
              e.preventDefault(); 
              const name = (document.getElementById('name') as HTMLInputElement).value;
              const message = (document.getElementById('message') as HTMLTextAreaElement).value;
              window.location.href = `mailto:joud.kayale@gmail.com?subject=New Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
            }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">{t('form.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t('form.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">{t('form.message')}</label>
                <textarea 
                  id="message" 
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto gap-2 group">
                {t('form.submit')} 
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:group-hover:-translate-x-1 rtl:group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
