import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translationUz from  "./locales/uz/translate.json"
import translationEn from  "./locales/en/translate.json"
import translationRu from  "./locales/ru/translate.json"
const resources = {
  en: {
    translation: translationEn,
  },
  uz: {
     translation: translationUz,
  },
  ru: {
    translation: translationRu,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,

    interpolation: {
      escapeValue: false 
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // tanlangan tilni saqlash
    },
  });

  export default i18n;