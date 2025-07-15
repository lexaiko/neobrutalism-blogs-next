import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="bg-white border-[3px] border-black p-4 flex flex-col justify-between hover:bg-yellow-200 transition">
      
      {/* Image Wrapper with 4:3 Aspect Ratio */}
      <div className="aspect-[4/3] w-full mb-4 border-[3px] border-black overflow-hidden">
        <img
          src={
            post.image
              ? post.image
              : `https://placehold.co/600x400?text=${encodeURIComponent(post.title)}`
          }
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h4 className="text-xl font-bold uppercase">{post.title}</h4>
        <p className="text-sm mt-2 mb-4">{post.excerpt}</p>
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border-[3px] border-black px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block border-[3px] border-black px-4 py-2 font-bold uppercase hover:bg-black hover:text-white transition"
        >
          Baca Artikel
        </Link>
      </div>
    </div>
  );
}
