import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: "/images/gallery-1.jpg", alt: "Red floral 3D nail art" },
    { src: "/images/gallery-2.jpg", alt: "Pink blushing minimalist nails" },
    { src: "/images/gallery-3.jpg", alt: "Silver chrome striking nails" },
    { src: "/images/gallery-1.png", alt: "Red floral 3D nail art" },
    { src: "/images/gallery-2.png", alt: "Pink blushing minimalist nails" },
    { src: "/images/gallery-3.png", alt: "Silver chrome striking nails" },
    { src: "/images/gallery-4.jpg", alt: "Silver chrome striking nails" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-kuku-primary/5 relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kuku-blue/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-kuku-text mb-2">
              Our Gallery
            </h2>
            <p className="text-kuku-text/60">Recent work from the Kukururu Atelier</p>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border-2 border-kuku-text/10 flex items-center justify-center hover:bg-white transition-colors">
              <svg className="w-6 h-6 text-kuku-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-kuku-text/10 flex items-center justify-center hover:bg-white transition-colors">
              <svg className="w-6 h-6 text-kuku-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Scroll snapping gallery */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[280px] md:w-[350px] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group cursor-pointer"
            >
              <div className="absolute inset-0 bg-kuku-text/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-kuku-text px-6 py-2 rounded-full font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Detail
                </span>
              </div>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 gap-2 md:hidden">
          {images.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-kuku-primary' : 'w-2 bg-kuku-text/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
