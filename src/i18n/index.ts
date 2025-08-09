import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ua from './locales/ua.json';
import ru from './locales/ru.json';
import pl from './locales/pl.json';

const resources = {
  en: { translation: en },
  ua: { translation: ua },
  ru: { translation: ru },
  pl: { translation: pl },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ua',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Важливо для Next.js App Router
    },
  });

export default i18n;
