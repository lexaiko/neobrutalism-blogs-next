import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import PostCard from '@/components/PostCard'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'


export default async function Home() {
  const posts = await getAllPosts() // Ambil dari markdown

  return (
    <main className="min-h-screen bg-yellow-50 text-black font-mono">
      <Navbar />
      <Hero />

      {/* Struktur Data JSON-LD untuk SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Eko Bagus Susanto',
            alternateName: 'Eiko Alexandra',
            url: 'https://eikoalexandra.my.id',
            sameAs: [
              'https://github.com/lexaiko',
              'https://twitter.com/lexaiko_id',
              'https://linkedin.com/in/lexaiko',
            ],
          }),
        }}
      />

      <section id="artikel" className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6 md:px-12 py-16">
        <Sidebar />
        <div className="lg:col-span-3 order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
