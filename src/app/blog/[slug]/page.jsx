import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'src/content/blog') // ✅ Ganti path
  if (!fs.existsSync(blogDir)) {
    console.warn('📁 Folder blog tidak ditemukan.')
    return []
  }

  const files = fs.readdirSync(blogDir)
  return files.map(filename => ({
    slug: filename.replace('.md', '')
  }))
}

export default async function BlogDetail(props) {
  const { slug } = await props.params // ✅ Perlu di-await

  const blogDir = path.join(process.cwd(), 'src/content/blog')
  const filePath = path.join(blogDir, `${slug}.md`)

  try {
    const file = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(file)
    const processed = await remark().use(html).process(content)
    const contentHtml = processed.toString()

    return (
      <main className="bg-white min-h-screen text-black font-mono">
        <Navbar />
        <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold uppercase border-b-[3px] border-black pb-4 mb-6">
            {data.title}
          </h1>
          <article
            className="prose prose-sm md:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>
        <Footer />
      </main>
    )
  } catch (e) {
    console.error('❌ Error loading post:', e)
    return notFound()
  }
}

