"use client";

import { useParams } from "next/navigation";

export default function LocalizedPage() {
  const params = useParams();
  const locale: string = Array.isArray(params?.locale) ? params.locale[0] : params?.locale || "en"; // Гарантуємо, що це рядок

  const content: Record<string, { title: string; text: string }> = {
    en: { title: "Welcome to MindSphere!", text: "A platform for growth and self-improvement." },
    ru: { title: "Добро пожаловать в MindSphere!", text: "Платформа для самосовершенствования." },
    ua: { title: "Ласкаво просимо в MindSphere!", text: "Платформа для саморозвитку та вдосконалення." },
    pl: { title: "Witamy w MindSphere!", text: "Platforma do rozwoju i samodoskonalenia." },
  };

  return (
    <div>
      <h1>{content[locale]?.title || content.en.title}</h1>
      <p>{content[locale]?.text || content.en.text}</p>
    </div>
  );
}
