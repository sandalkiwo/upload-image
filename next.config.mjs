/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frztsu5etpj6feif.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
