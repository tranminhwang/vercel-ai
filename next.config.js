/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/tranminhwang/vercel-ai",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "https://github.com/tranminhwang/vercel-ai/issues",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
