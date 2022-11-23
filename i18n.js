import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './public/locales/en/translation.json';
import translationID from './public/locales/id/translation.json';

// the translations
const resources = {
    en: {
      translation: translationEN
    },
    id: {
        translation: translationID
    }
  };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    debug: true,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;