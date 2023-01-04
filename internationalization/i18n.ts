import { en_US } from '@/internationalization/locales/en/en_US';
import { fr_FR } from '@/internationalization/locales/fr/fr_FR';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const resources = {
  us: {
    translation: en_US,
  },
  fr: {
    translation: fr_FR,
  },
};

export const availableLanguages = Object.keys(resources);

const options = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: options,
    supportedLngs: ['en', 'fr'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
