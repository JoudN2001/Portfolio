import {setRequestLocale} from 'next-intl/server';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Archive } from '@/components/archive';
import { Contact } from '@/components/contact';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <div id="experience" className="w-full border-t border-border/40">
        <Experience />
      </div>
      <div id="projects" className="w-full">
        <Projects />
      </div>
      <div id="archive" className="w-full">
        <Archive />
      </div>
      <div id="contact" className="w-full">
        <Contact />
      </div>
    </main>
  );
}
