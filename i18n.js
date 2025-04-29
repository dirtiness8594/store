import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traduções de exemplo
const resources = {
    en: {
        translation: {
            welcome: 'Welcome',
            language: 'Language',
        },
    },
    pt: {
        translation: {
            welcome: 'Bem-vindo',
            language: 'Idioma',
        },
    },
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'en', // idioma inicial
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
