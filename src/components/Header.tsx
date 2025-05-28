"use client";
import { useParams, useRouter } from "next/navigation";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import ua from "../locales/ua.json";
import pl from "../locales/pl.json";

const translations: Record<string, any> = { en, ru, ua, pl};
const locales = ["en", "ru", "ua", "pl"];

export default function Header() {
  const params = useParams();
  const router = useRouter();
  const locale: string = Array.isArray(params?.locale) ? params.locale[0] : params?.locale || "en";

  const t = translations[locale] || translations.en; // Вибираємо потрібну локаль

  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  return (
    <header className="header">
      <h1>MindSphere</h1>
      <nav>
        <a href={`/${locale}`}>{translations[locale]?.home || translations.en.home}</a>
        <a href={`/${locale}/pot`}>{t.navbar.pot}</a> {/* ✅ Витягуємо назву "Горшок" з локалі */}
        <a href={`/${locale}/calculation`}>{t.navbar.calculation}</a>
      </nav>
      <select value={locale} onChange={(e) => handleLocaleChange(e.target.value)}>
        {locales.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </header>
  );
}
