"use client"

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLocale} 
      className="gap-2 rounded-full border border-border px-4"
    >
      <Globe className="h-4 w-4 text-primary" />
      <span>{locale === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
}
