import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ua from "./locales/ua.json";
import ru from "./locales/ru.json";
import pl from "./locales/pl.json";

// Define the TypeScript Interface
interface TranslationResources {
  [key: string]: { translation: Record<string, string> };
}

// Properly define the resources object
const resources: TranslationResources = {
  en: { translation: en },
  ua: { translation: ua },
  ru: { translation: ru },
  pl: { translation: pl },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "ua", // Default language
  fallbackLng: ["en", "ru", "pl"],
  interpolation: { escapeValue: false },
});

export default i18next;
