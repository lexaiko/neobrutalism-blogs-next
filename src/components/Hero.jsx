export default function Hero() {
  return (
    <section className="px-6 md:px-12 py-20 bg-white border-b-[3px] border-black text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-4">Lexaiko's Blog</h2>
      <p className="text-md md:text-lg max-w-2xl mx-auto font-medium mb-6">
        Halo! Saya <strong>Eko Bagus Susanto</strong> (alias <strong>Eiko Alexandra</strong>, dikenal juga sebagai <strong>Lexaiko</strong>).
        Di sini saya menulis tentang teknologi, desain web, dan rekayasa <em>perangkat lunak</em>. Saya juga memiliki keahlian di bidang <strong>software engineer</strong>, <strong>AI engineer</strong>, dan <strong>IoT engineer</strong>. I do what i like to do.
      </p>
      <a href="#artikel" className="inline-block border-[3px] border-black px-6 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white transition">
        Start Reading →
      </a>
    </section>
  )
}
