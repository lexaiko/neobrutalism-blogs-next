'use client'

import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-yellow-50 text-black font-mono">
      {/* NAVBAR */}
      <header className="border-b-[3px] border-black px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">NextBrutalBlog</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-bold">
          <a href="#" className="hover:underline underline-offset-4">Home</a>
          <a href="#" className="hover:underline underline-offset-4">Blog</a>
          <a href="#" className="hover:underline underline-offset-4">About</a>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden border-[3px] border-black px-2 py-1">
          ☰
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b-[3px] border-black px-6 py-4 space-y-2 font-bold">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Blog</a>
          <a href="#" className="block">About</a>
        </div>
      )}

      {/* HERO */}
      <section className="px-6 md:px-12 py-20 bg-white border-b-[3px] border-black text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-4">Neo-Brutal Blogging</h2>
        <p className="text-md md:text-lg max-w-2xl mx-auto font-medium mb-6">
          Built with Next.js and brutalist passion. Bold fonts, thick borders, and anti-simp design.
        </p>
        <a href="#" className="inline-block border-[3px] border-black px-6 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white transition">
          Start Writing →
        </a>
      </section>

      {/* CONTENT */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6 md:px-12 py-16">
        {/* SIDEBAR */}
        <aside className="lg:col-span-1 order-2 lg:order-1">
          <div className="border-[3px] border-black p-4 bg-white mb-6">
            <h3 className="text-lg font-bold mb-2 uppercase">Kategori</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Tech</a></li>
              <li><a href="#" className="hover:underline">Design</a></li>
              <li><a href="#" className="hover:underline">Life</a></li>
            </ul>
          </div>
          <div className="border-[3px] border-black p-4 bg-white">
            <h3 className="text-lg font-bold mb-2 uppercase">Tags Populer</h3>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {['nextjs', 'tailwind', 'blogging', 'design', 'brutal'].map(tag => (
                <span key={tag} className="border-[3px] border-black px-2 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        {/* POSTS */}
        <div className="lg:col-span-3 order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white border-[3px] border-black p-4 flex flex-col justify-between hover:bg-yellow-200 transition"
            >
              <img
                src={`https://placehold.co/600x400?text=Post+${item}`}
                alt={`Post ${item}`}
                className="mb-4 border-[3px] border-black"
              />
              <div>
                <h4 className="text-xl font-bold uppercase">Judul Artikel {item}</h4>
                <p className="text-sm mt-2 mb-4">Tulisan brutal tentang teknologi, desain, dan kehidupan digital.</p>
                <div className="flex gap-2 mb-4">
                  {['nextjs', 'brutal'].map(tag => (
                    <span key={tag} className="text-xs border-[3px] border-black px-2 py-1">{tag}</span>
                  ))}
                </div>
                <a href="#" className="inline-block border-[3px] border-black px-4 py-2 font-bold uppercase hover:bg-black hover:text-white transition">
                  Baca Artikel
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t-[3px] border-black px-6 md:px-12 py-10 text-center text-sm font-bold">
        &copy; {new Date().getFullYear()} NEXTBRUTALBLOG — made with 💣 & 😎 by Eko Bagus Susanto
      </footer>
    </main>
  )
}
