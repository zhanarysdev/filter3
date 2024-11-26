import i18n, { changeLanguage } from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './locales/en.json'
import translationRU from './locales/ru.json'
import translationKK from './locales/kk.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["ru", "en", "kk"],
    detection: {
      order: ["navigator"],
      lookupFromPathIndex: 0,
    },
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
      kk: {
        translation: translationKK,
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
