import de from '../locales/de.json';
import en from '../locales/en.json';
import hu from '../locales/hu.json';

export const defaultLanguage = 'en' as const;

export const translations = {
  en,
  hu,
  de,
} as const;

export type SupportedLanguage = keyof typeof translations;
export type TranslationKey = keyof typeof en;
export type TranslationDictionary = typeof en;
