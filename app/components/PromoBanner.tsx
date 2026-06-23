import React from 'react';

export default function PromoBanner() {
  return (
    <div className="bg-kuku-primary text-white py-6 px-6 relative overflow-hidden">
      {/* Abstract wave pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20px 20px, white 2px, transparent 0)", backgroundSize: "40px 40px" }} />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left relative z-10">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0 animate-bounce">
          <span className="text-3xl">🎁</span>
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold mb-1">Special Promo!</h3>
          <p className="text-lg font-medium text-white/90">
            Free remove untuk customer KUKURURU di treatment nail art berikutnya!
          </p>
        </div>
        <button className="md:ml-auto px-6 py-2 bg-white text-kuku-primary font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
          Klaim Promo
        </button>
      </div>
    </div>
  );
}
