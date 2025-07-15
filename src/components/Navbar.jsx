'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Function buat kasih underline ke halaman aktif
  const isActive = (path) =>
    pathname === path ? 'underline underline-offset-4' : 'hover:underline underline-offset-4'

  return (
    <>
      <header className="border-b-[3px] border-black px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
        <h1 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">Lexaiko's blog</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-bold">
          <Link href="/" className={isActive('/')}>Home</Link>
          <Link href="/blog" className={isActive('/blog')}>Blog</Link>
          <Link href="/about" className={isActive('/about')}>About</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border-[3px] border-black px-2 py-1"
        >
          ☰
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b-[3px] border-black px-6 py-4 space-y-2 font-bold">
          <Link href="/" className="block">Home</Link>
          <Link href="/blog" className="block">Blog</Link>
          <Link href="/about" className="block">About</Link>
        </div>
      )}
    </>
  )
}
