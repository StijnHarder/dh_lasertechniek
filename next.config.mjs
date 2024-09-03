/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "headlesscmsblogmcstinna.local",
        pathname: "/**"
      },
    ],
  },
};

export default nextConfig;
