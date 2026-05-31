import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import appEn from '../../lang/en.json';
import appFr from '../../lang/fr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: { en: { app: appEn }, fr: { app: appFr } },
  debug: false,
  ns: ['app'],
  fallbackLng: 'en',
  lng: global?.navigator?.language || '',
  keySeparator: '.',
  interpolation: { escapeValue: false, prefix: '{', suffix: '}' },
});

export default i18n;
