import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-kuku-highlight/40 rounded-full blur-3xl -z-10 mix-blend-multiply" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-kuku-blue/30 rounded-full blur-3xl -z-10 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 relative z-10">
          <div className="inline-block bg-kuku-yellow/80 px-4 py-1 rounded-full text-sm font-bold w-fit mb-2 shadow-sm rotate-[-2deg]">
            ✨ THE NAIL ART ATELIER
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] text-kuku-primary drop-shadow-sm">
            Handmade<br />Press-ons<br />with Soul.
          </h1>
          <p className="text-lg text-kuku-text/80 max-w-md mt-4 leading-relaxed">
            Kuku cantik instant, kualitas salon di rumah. Premium gel materials and handmade art tailored just for you.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#order" className="px-8 py-4 bg-kuku-primary text-white rounded-2xl font-bold text-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all">
              Pesan Sekarang
            </a>
            <a href="#process" className="px-8 py-4 bg-kuku-highlight text-kuku-text rounded-2xl font-bold text-lg shadow-sm hover:-translate-y-1 transition-all">
              Our Process
            </a>
          </div>
        </div>

        <div className="relative z-10 w-full h-[500px] md:h-[600px] group">
          <div className="absolute inset-0 bg-kuku-green/20 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-6 duration-500" />
          <div className="absolute inset-0 overflow-hidden rounded-[3rem] border-8 border-kuku-bg shadow-2xl">
            <Image
              src="/images/hero.jpg"
              alt="Beautiful manicured hand wearing Kukururu press-on nails"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          {/* Hand-drawn style accent sticker */}
          <div className="absolute -bottom-6 -left-6 bg-kuku-yellow rounded-full w-24 h-24 flex items-center justify-center p-4 shadow-lg rotate-[-12deg] z-20">
            <span className="font-display text-xl leading-tight text-center text-kuku-text">Get Slayed <br /> ✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
