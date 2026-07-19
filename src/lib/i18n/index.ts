/**
 * Lightweight i18n for HermesChi landing page.
 * Supports English (en) and Persian (fa).
 */

import { EN, type TranslationKey } from './en'
import { FA } from './fa'

export type LocaleId = 'en' | 'fa'
export type { TranslationKey }

type LocaleTranslations = Record<TranslationKey, string>

const LOCALES: Record<LocaleId, LocaleTranslations> = {
  en: EN,
  fa: FA,
}

export const LOCALE_LABELS: Record<LocaleId, string> = {
  en: 'English',
  fa: 'فارسی',
}

const STORAGE_KEY = 'hermeschi-landing-locale'
const RTL_LOCALES: ReadonlySet<LocaleId> = new Set<LocaleId>(['fa'])

export function getDir(locale: LocaleId): 'rtl' | 'ltr' {
  return RTL_LOCALES.has(locale) ? 'rtl' : 'ltr'
}

export function getLocale(): LocaleId {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && stored in LOCALES) return stored as LocaleId
  const full = navigator.language
  if (full in LOCALES) return full as LocaleId
  const lang = full.split('-')[0]
  if (lang in LOCALES) return lang as LocaleId
  return 'en'
}

export function setLocale(id: LocaleId): void {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem(STORAGE_KEY, id)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = id
    document.documentElement.dir = getDir(id)
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('locale-change', { detail: id }))
  }
}

export function isRtl(): boolean {
  return getDir(getLocale()) === 'rtl'
}

export function t(key: TranslationKey): string {
  const locale = getLocale()
  return LOCALES[locale]?.[key] ?? LOCALES.en[key] ?? key
}
