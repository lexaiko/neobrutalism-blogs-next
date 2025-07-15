export default function Sidebar() {
  const categories = ['Artikel', 'Tutorial', 'Berita', 'Event']
  const tags = ['nextjs', 'tailwindcss', 'ui-kit', 'laravel', 'brutalism', 'blog']

  return (
    <aside className="lg:col-span-1 order-2 lg:order-1">
      {/* Kategori */}
      <div className="border-[3px] border-black p-4 bg-white mb-6">
        <h3 className="text-lg font-bold mb-2 uppercase">Kategori</h3>
        <ul className="space-y-1 text-sm">
          {categories.map((category) => (
            <li key={category}>
              <a href={`/kategori/${category.toLowerCase()}`} className="hover:underline">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Populer */}
      <div className="border-[3px] border-black p-4 bg-white">
        <h3 className="text-lg font-bold mb-2 uppercase">Tags Populer</h3>
        <div className="flex flex-wrap gap-2 text-xs font-bold">
          {tags.map((tag) => (
            <a
              key={tag}
              href={`/tags/${tag}`}
              className="border-[3px] border-black px-2 py-1 bg-yellow-200 hover:bg-yellow-300 transition"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
