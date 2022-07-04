import { createI18n } from 'vue-i18n'

// one way loading .json files to messages
import en from '@/assets/i18n/en.json';
import de from '@/assets/i18n/de.json';

const defaultLocale = 'en'

const languages = {
  en: en,
  de: de,
}
const messages = Object.assign(languages);

// alternative way of loading files dynamically
const loadLocaleMessages = () => {
    const locales = require.context('../assets/i18n', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages: { [key: string]: any } = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
  }
//   console.log(loadLocaleMessages());

// 2. Create i18n instance with options
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages:loadLocaleMessages(), 
});
export default i18n;


