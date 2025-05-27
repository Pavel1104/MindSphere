"use client";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
  };

  return (
    <div className="space-x-4">
      <button onClick={() => changeLanguage("ua")} className="px-4 py-2 bg-blue-500 text-white rounded">🇺🇦 Українська</button>
      <button onClick={() => changeLanguage("en")} className="px-4 py-2 bg-gray-500 text-white rounded">🇬🇧 English</button>
      <button onClick={() => changeLanguage("ru")} className="px-4 py-2 bg-red-500 text-white rounded">🇷🇺 Русский</button>
      <button onClick={() => changeLanguage("pl")} className="px-4 py-2 bg-green-500 text-white rounded">🇵🇱 Polski</button>
    </div>
  );
}
