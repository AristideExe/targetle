import i18n from "i18next"
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next"
import fr from './locales/fr.json'
import en from './locales/en.json'

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: {...fr},
            en: {...en}
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
          }
    });