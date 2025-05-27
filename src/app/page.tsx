"use client";

import { useTranslation } from "react-i18next";
import i18next from "@/i18n";

export default function Home() {
  const { t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">{t("welcome")}</h1>
      <p className="text-lg text-gray-600 mt-4">{t("about")}</p>

      {/* Language Switcher */}
      <div className="mt-6 space-x-4">
        <p>indennjnjknjx</p>
        <button onClick={() => changeLanguage("ua")} className="px-4 py-2 bg-blue-500 text-white rounded">🇺🇦 Українська</button>
        <button onClick={() => changeLanguage("en")} className="px-4 py-2 bg-gray-500 text-white rounded">🇬🇧 English</button>
        <button onClick={() => changeLanguage("ru")} className="px-4 py-2 bg-red-500 text-white rounded">🇷🇺 Русский</button>
        <button onClick={() => changeLanguage("pl")} className="px-4 py-2 bg-green-500 text-white rounded">🇵🇱 Polski</button>
      </div>
    </div>
  );
}
