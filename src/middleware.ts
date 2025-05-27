import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGUAGES = ["ua", "ru", "pl", "en"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  console.log("Requested Path:", pathname);

  // Якщо користувач вже перебуває на локалізованій сторінці, пропускаємо редірект
  const isLocalized = SUPPORTED_LANGUAGES.some((locale) => pathname.startsWith(`/${locale}`));
  if (isLocalized) {
    console.log(`Already localized: ${pathname}`);
    return NextResponse.next();
  }

  // Якщо URL == `/`, визначаємо мову користувача та перенаправляємо його
  if (pathname === "/") {
    const langHeader = req.headers.get("accept-language");
    console.log("Accept-Language Header:", langHeader);

    let lang = langHeader?.split(",")[0]?.slice(0, 2) || "en";

    // 🔹 Автоматично змінюємо `uk` → `ua`
    if (lang === "uk") {
      lang = "ua";
    }

    console.log("Detected Language:", lang);
    const targetLang = SUPPORTED_LANGUAGES.includes(lang) ? lang : "en";
    console.log(`Redirecting to: /${targetLang}`);

    return NextResponse.redirect(new URL(`/${targetLang}`, req.url));
  }

  return NextResponse.next();
}
