import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/posts' // ✅ ganti posts.js

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="bg-yellow-50 min-h-screen font-mono text-black">
      <Navbar />
      <section className="px-6 md:px-12 py-20">
        <h1 className="text-4xl font-extrabold uppercase border-b-[3px] border-black pb-4 mb-6">
          Semua Artikel
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
