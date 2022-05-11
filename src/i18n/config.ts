import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});

export { i18n }