import { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["ua", "ru", "pl", "en"], // Доступні локалі
    defaultLocale: "ua",
  },
};

export default nextConfig;
