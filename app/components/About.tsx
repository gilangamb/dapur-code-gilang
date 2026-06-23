import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="process" className="py-24 px-6 bg-kuku-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-kuku-highlight/20 rounded-[3rem] -rotate-6 scale-105 -z-10" />
          <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden border-4 border-kuku-bg shadow-xl">
            <Image 
              src="/images/craft.png" 
              alt="Nail artist carefully painting details on a press-on nail" 
              fill 
              className="object-cover"
            />
            {/* Play button overlay just for visual aesthetic */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-kuku-primary shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-display text-4xl md:text-5xl text-kuku-primary">
            See The Craft
          </h2>
          <p className="text-lg text-kuku-text/80 leading-relaxed">
            Our manual hand-painting process is what sets us apart. Every stroke is intentional, every pattern is unique. We don't automate art; we pour our passion into every tiny canvas.
          </p>
          <ul className="flex flex-col gap-4 mt-4">
            {[
              "Premium gel polishes for lasting shine",
              "Triple-layered sealing for durability",
              "Sustainably sourced nail tips"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-kuku-green/30 text-kuku-green flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-kuku-text font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
