'use client';
import { usePathname, useRouter } from 'next/navigation';
import en from '../i18n/locales/en.json';
import ru from '../i18n/locales/ru.json';
import ua from '../i18n/locales/ua.json';
import pl from '../i18n/locales/pl.json';

type Locale = 'en' | 'ru' | 'ua' | 'pl';

interface Translations {
  navbar: {
    home: string;
    numerology: {
      title: string;
      pot: string;
      calculator: string;
    };
  };
}

const translations: Record<Locale, Translations> = { en, ru, ua, pl };

const locales: Locale[] = ['en', 'ru', 'ua', 'pl'];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const locale = locales.find((lang) => pathname.startsWith(`/${lang}`)) || 'en';

  const t = translations[locale];

  const handleLocaleChange = (newLocale: Locale) => {
    router.push(`/${newLocale}`);
  };

  return (
    <header className="header">
      <h1>MindSphere</h1>
      <nav>
        <a href={`/${locale}`}>{t.navbar.home}</a>
        <div className="dropdown">
          <span className="dropdown-toggle">{t.navbar.numerology.title}</span>
          <div className="dropdown-menu">
            <a href={`/${locale}/numerology/pot`}>{t.navbar.numerology.pot}</a>
            <a href={`/${locale}/numerology/calculator`}>{t.navbar.numerology.calculator}</a>
          </div>
        </div>
      </nav>
      <select value={locale} onChange={(e) => handleLocaleChange(e.target.value as Locale)}>
        {locales.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </header>
  );
}
