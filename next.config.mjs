/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, 
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'bgbaeyvlfuknoqfvvyeg.supabase.co',
      },
    ],
  },
};

export default nextConfig;

