import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import translations from './translations';

i18n
    .use(initReactI18next)
    .init({
        resources: translations,
        fallbackLng: 'pt-BR',
        lng: 'pt-BR',
        debug: process.env.NODE_ENV === 'development',

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
