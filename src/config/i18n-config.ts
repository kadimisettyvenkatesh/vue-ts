import { createI18n } from 'vue-i18n'
import { languages, defaultLocale } from '../assets/i18n';
// import { defaultLocale } from './i18n/index.js'
const messages = Object.assign(languages)

// 2. Create i18n instance with options
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, 
});
export default i18n;