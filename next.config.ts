import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/old-home', // Rota antiga
        destination: '/',    // Rota nova
        permanent: true,     // Redirecionamento permanente (301)
      },
    ];
  },
};

export default nextConfig;
