import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './languages/en';
import ptTranslations from './languages/pt';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['navigator'],
        },
        debug: true, 
        resources: {
            en: {
                translation: enTranslations,
            },
            pt: {
                translation: ptTranslations,
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;