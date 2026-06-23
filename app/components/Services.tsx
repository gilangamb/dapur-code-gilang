import React from 'react';

export default function Services() {
  const categories = [
    {
      title: "Main Nail Services",
      icon: "💅",
      color: "bg-kuku-highlight/20",
      items: [
        { name: "Single Color", desc: "Russian manicure + gel color max 1 + vitamin" },
        { name: "Duo Color", desc: "Russian manicure + gel color max 2 + vitamin" },
        { name: "Full Color", desc: "Russian manicure + gel color no max + vitamin" },
        { name: "Soft Tip Extension", desc: "Russian manicure + soft tip + gel color max 2 + vitamin" },
        { name: "Chroom Nail", desc: "Russian manicure + full chroom + overlay + vitamin" },
        { name: "French Nail", desc: "Russian manicure + french design 2 color + vitamin" },
        { name: "Blushing Nail", desc: "Russian manicure + blushing nail 2 color + vitamin" },
      ]
    },
    {
      title: "Design Add-Ons",
      icon: "✨",
      color: "bg-kuku-green/20",
      items: [
        { name: "Simple Design", desc: "Chroom, cat eye, blushing nail, french" },
        { name: "Medium Design", desc: "Painting, marble, small 3D" },
        { name: "Hard Design", desc: "Painting, big 3D" },
        { name: "Accessories", desc: "Berbagai aksesoris kuku" },
      ]
    },
    {
      title: "Extra Care & Removal",
      icon: "🫧",
      color: "bg-kuku-blue/20",
      items: [
        { name: "Russian Manicure", desc: "Manicure + vitamin" },
        { name: "Strengthener", desc: "Penguat kuku (per jari)" },
        { name: "Soft Tip Extension", desc: "Ekstensi kuku (per jari)" },
        { name: "Remove", desc: "Pelepasan gel/nail art" },
        { name: "Remove Package", desc: "Remove + russian manicure + vitamin" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-kuku-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-kuku-text mb-4">
            Our Menu
          </h2>
          <p className="text-kuku-text/60">Simple, transparent pricing for artisanal quality.</p>
        </div>

        <div className="flex flex-col gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm border border-kuku-text/5 hover:border-kuku-primary/20 transition-colors">
              <div className={`w-16 h-16 shrink-0 rounded-2xl ${cat.color} flex items-center justify-center text-3xl`}>
                {cat.icon}
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-xl font-bold text-kuku-text mb-4">{cat.title}</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex flex-col">
                      <span className="font-semibold text-kuku-text text-sm">{item.name}</span>
                      <span className="text-kuku-text/60 text-xs">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Dummy pricing highlight at the bottom of the list */}
          <div className="relative mt-8 bg-kuku-primary/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between border-2 border-dashed border-kuku-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm">
                💡
              </div>
              <div>
                <h4 className="font-bold text-kuku-text">Custom Request?</h4>
                <p className="text-sm text-kuku-text/60">Send your inspiration and get a quote</p>
              </div>
            </div>
            <a href="#order" className="mt-4 md:mt-0 font-bold text-kuku-primary hover:underline">
              Start a custom order →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
