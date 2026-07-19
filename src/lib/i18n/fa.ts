/**
 * Persian (fa) translation table.
 * Standard Iranian Persian with proper ZWNJ (نیم‌فاصله).
 */

import type { TranslationKey } from './en'

type LocaleTranslations = Record<TranslationKey, string>

const FA: LocaleTranslations = {
  // Nav
  'nav.features': 'امکانات',
  'nav.hermeschiworld': 'هرمزچی‌ورلد',
  'nav.github': 'گیت‌هاب',
  'nav.docs': 'مستندات',
  // Hero
  'hero.badge': 'متن‌باز',
  'hero.title': 'هرمزچی',
  'hero.subtitle': 'فضای کار دسکتاپ برای عامل‌های هوش مصنوعی — چت، فایل‌ها، حافظه، مهارت‌ها و ترمینال در یک جا.',
  'hero.getStarted': 'شروع کنید',
  'hero.viewOnGithub': 'مشاهده در گیت‌هاب',
  'hero.stars': 'ستاره',
  // Setup
  'setup.title': 'شروع سریع',
  'setup.subtitle': 'کمتر از ۶۰ ثانیه راه‌اندازی کنید.',
  'setup.step1': 'نصب',
  'setup.step2': 'راه‌اندازی دروازه',
  'setup.step3': 'باز کردن فضای کار',
  'setup.step1Desc': 'اجرای نصاب',
  'setup.step2Desc': 'راه‌اندازی دروازه عامل هرمس',
  'setup.step3Desc': 'باز کردن فضای کار در مرورگر',
  // Features
  'features.title': 'همه چیزی که نیاز دارید',
  'features.subtitle': 'یک فضای کار کامل برای کار با عامل‌های هوش مصنوعی.',
  'features.chat.title': 'چت عامل',
  'features.chat.desc': 'پخش پاسخ‌ها، مدیریت context، تعویض مدل در میان گفتگو.',
  'features.files.title': 'مرورگر فایل',
  'features.files.desc': 'مرور، ویرایش و پیش‌نمایش فایل‌ها با ادیتور Monaco.',
  'features.memory.title': 'حافظه',
  'features.memory.desc': 'حافظه پایدار عامل در سراسر نشست‌ها با گراف دانش.',
  'features.skills.title': 'مهارت‌ها',
  'features.skills.desc': 'نصب و مدیریت مهارت‌های قابل استفاده مجدد از مارکت.',
  'features.terminal.title': 'ترمینال',
  'features.terminal.desc': 'ترمینال داخلی با پشتیبانی PTY و تاریخچه دستورات.',
  'features.dashboard.title': 'داشبورد',
  'features.dashboard.desc': 'تحلیل‌ها، ردیابی هزینه و بینش‌های استفاده در یک نگاه.',
  'features.swarm.title': 'Swarm',
  'features.swarm.desc': 'هماهنگ‌سازی چندعاملی با کنترل مأموریت و کانبان.',
  // HermesChiWorld
  'hermeschiworld.badge': 'ماژول بازی',
  'hermeschiworld.title': 'هرمزچی‌ورلد',
  'hermeschiworld.subtitle': 'یک جهان باز MMO که عامل‌های هوش مصنوعی شما در آن زندگی می‌کنند.',
  'hermeschiworld.desc': 'ساخته شده با هرمزچی. هرمزچی‌ورلد نمونه پرچمدار است: یک MMO جهان باز که عامل‌های هوش مصنوعی شما در آن همراهانی قابل مشاهده می‌شوند. آن‌ها مناطق را کاش می‌کنند، مأموریت‌ها را انجام می‌دهند، نشانه‌ها جمع می‌کنند و در حالی که جهان به حرکت ادامه می‌دهد، کار می‌کنند.',
  'hermeschiworld.visit': 'بازدید از هرمزچی‌ورلد',
  'hermeschiworld.play': 'بازی کنید',
  'hermeschiworld.builtWith': 'ساخته شده با هرمزچی',
  // Screenshots
  'screenshots.title': 'در عمل ببینید',
  'screenshots.subtitle': 'یک تور از فضای کار.',
  // Footer
  'footer.product': 'محصول',
  'footer.resources': 'منابع',
  'footer.community': 'جامعه',
  'footer.docs': 'مستندات',
  'footer.docker': 'راه‌اندازی Docker',
  'footer.troubleshooting': 'عیب‌یابی',
  'footer.github': 'گیت‌هاب',
  'footer.discord': 'دیسکورد',
  'footer.version': 'هرمزچی · نسخه ۲',
  // Mobile CTA
  'mobileCta.getStarted': 'شروع کنید',
  'mobileCta.viewGithub': 'گیت‌هاب',
  // Language
  'language.toggle': 'English',
  'language.english': 'English',
  'language.persian': 'فارسی',
  'settings.title': 'تنظیمات',
}

export { FA }
