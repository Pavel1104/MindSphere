/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middlewarePrefetch: "strict", // Забезпечує коректне виконання Middleware
  },

  // eslint: {
  //   ignoreDuringBuilds: true, // Уникає помилок ESLint під час збірки
  // },
};

export default nextConfig;
