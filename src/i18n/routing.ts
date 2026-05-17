import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  // Auto-detect locale from Accept-Language header on first visit
  localeDetection: true
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
