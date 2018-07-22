import * as i18n from 'i18next';
import * as XHR from 'i18next-xhr-backend';
import * as LanguageDetector from 'i18next-browser-languagedetector';

const instance = i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // TODO: Look into loading js files into resources instead of json files
    resources: {},

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    ns: ['translation'],
    defaultNS: 'translation',

    // react i18next special options (optional)
    react: {
      wait: true,
      nsMode: 'default',
    },
  });

export default instance;
