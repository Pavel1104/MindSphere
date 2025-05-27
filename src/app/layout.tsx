import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Імпортуємо мовний перемикач

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindSphere - Самовдосконалення",
  description: "Платформа для розвитку та самовдосконалення.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between p-4 bg-white shadow-md">
          <h1 className="text-xl font-bold">MindSphere</h1>
          <LanguageSwitcher /> {/* Додаємо мовний перемикач */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
