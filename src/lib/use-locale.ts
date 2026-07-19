'use client'

import { useEffect, useState } from 'react'
import {
  getLocale,
  setLocale,
  getDir,
  t as translate,
  type LocaleId,
  type TranslationKey,
} from '@/lib/i18n'

export function useLocale() {
  // Start with 'en' on SSR, then sync from localStorage on mount.
  // This prevents hydration mismatch errors.
  const [locale, setLocaleState] = useState<LocaleId>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // On client mount, read the actual locale from localStorage.
    // The bootstrap script in layout.tsx already set <html lang> and
    // <html dir> before React hydrated, so CSS selectors like
    // html[lang='fa'] are already active. We just need to sync the
    // React state so t() returns the right strings.
    const stored = getLocale()
    setLocaleState(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleChange = (e: Event) => {
      const detail = (e as CustomEvent<LocaleId>).detail
      if (detail) setLocaleState(detail)
    }
    window.addEventListener('locale-change', handleChange)
    return () => window.removeEventListener('locale-change', handleChange)
  }, [])

  const changeLocale = (id: LocaleId) => {
    setLocale(id)
    setLocaleState(id)
  }

  const dir = getDir(locale)
  const isRtl = dir === 'rtl'

  return { locale, dir, isRtl, setLocale: changeLocale, t: translate, mounted }
}

export { type LocaleId, type TranslationKey }
