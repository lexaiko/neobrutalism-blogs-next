/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',         // ⬅️ WAJIB kosong kalau pakai custom domain
  assetPrefix: '',      // ⬅️ WAJIB kosongin juga!
};


export default nextConfig;