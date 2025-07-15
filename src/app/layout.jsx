import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Eko Bagus Susanto — Lexaiko Blog',
  icons: {
    icon: '/favicon.ico', // 🟡 path dari /public
    shortcut: '/favicon.ico',
    apple: '/favicon.ico', // (optional) kalau ada support mobile
  },
  description: 'Blog personal oleh Eko Bagus Susanto (alias Eiko Alexandra) tentang teknologi, desain, dan rekayasa perangkat lunak',
  keywords: [
    'eko bagus susanto',
    'eiko alexandra',
    'lexaiko',
    "lexaiko's blog",
    'next.js blog',
    'neobrutalism design',
    'web teknologi indonesia',
  ],
  authors: [{ name: 'Eko Bagus Susanto', url: 'https://blog.eikoalexandra.my.id' }],
  creator: 'Eko Bagus Susanto',
  alternates: {
    canonical: 'https://blog.eikoalexandra.my.id/',
  },
  openGraph: {
    title: 'Lexaiko blog by Eko Bagus Susanto',
    description: 'Blog lexaiko tentang teknologi, desain, dan hidup digital. Dibuat oleh Eko Bagus Susanto (alias Lexaiko).',
    url: 'https://blog.eikoalexandra.my.id',
    siteName: 'Lexaiko blog',
    images: [
      {
        url: 'https://blog.eikoalexandra.my.id/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Lexaiko blog by Eko Bagus Susanto',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eko Bagus Susanto — Lexaiko blog',
    description: 'web tech & design blog by Lexaiko (a.k.a. Eiko Alexandra)',
    creator: '@lexaiko_id',
    images: ['https://blog.eikoalexandra.my.id/logo.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
