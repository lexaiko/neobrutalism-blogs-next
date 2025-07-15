import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen font-mono">
      <Navbar />
      <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold uppercase border-b-[3px] border-black pb-3 mb-6">
          Tentang NextBrutalBlog
        </h1>
        <p className="text-lg mb-4">
          Blog ini dibuat oleh <strong>Eko Bagus Susanto</strong> dengan gaya desain Neo-Brutalism. Dibangun menggunakan Next.js, Tailwind CSS, dan semangat Gen Z.
        </p>
        <p className="text-md text-gray-800">
          Tujuannya untuk menginspirasi generasi kreatif di bidang teknologi, desain, dan digital life. Semua artikel ditulis dengan gaya bold, jelas, dan brutal — tanpa basa-basi.
        </p>
      </section>
      <Footer />
    </main>
  )
}
