import React from 'react';

export default function USP() {
  const points = [
    {
      title: "Custom Craft",
      desc: "Each set is hand-painted specifically for your measurements and style preferences.",
      icon: (
        <svg className="w-6 h-6 text-kuku-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: "bg-kuku-highlight/30"
    },
    {
      title: "Reusable Art",
      desc: "Durable materials and quality finishes allow you to wear your favorite designs again and again.",
      icon: (
        <svg className="w-6 h-6 text-kuku-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: "bg-kuku-green/30"
    },
    {
      title: "Premium Fit",
      desc: "Perfectly measured sizing ensures comfort and a look indistinguishable from a salon visit.",
      icon: (
        <svg className="w-6 h-6 text-kuku-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-kuku-highlight/30"
    }
  ];

  return (
    <section className="py-24 px-6 bg-kuku-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center text-kuku-text mb-16">
          Why Kukururu?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div key={i} className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border-2 border-transparent hover:border-kuku-primary/20 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl text-center flex flex-col items-center">
              <div className={`w-16 h-16 rounded-2xl ${point.color} flex items-center justify-center mb-6 rotate-3 group-hover:-rotate-3 transition-transform`}>
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-kuku-text mb-3">{point.title}</h3>
              <p className="text-kuku-text/70 leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
