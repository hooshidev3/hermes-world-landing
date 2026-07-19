'use client'

import { useLocale } from '../lib/use-locale'

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <button
      className="lang-toggle"
      onClick={() => setLocale(locale === 'en' ? 'fa' : 'en')}
      aria-label="Toggle language"
    >
      {locale === 'en' ? 'فارسی' : 'English'}
    </button>
  )
}
