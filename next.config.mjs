/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Builds a fully static site into ./out — host it anywhere (Vercel, Netlify, GitHub Pages).
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // The animation layer touches the DOM once after mount; strict-mode double mounting isn't needed.
  reactStrictMode: false,
};

export default nextConfig;
