import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-kuku-bg pt-20 pb-10 px-6 border-t border-kuku-text/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="bg-kuku-primary rounded-[3rem] p-12 w-full text-center relative overflow-hidden shadow-2xl mb-16">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20px 20px, white 2px, transparent 0)", backgroundSize: "40px 40px" }} />
          
          <h2 className="relative z-10 font-display text-4xl md:text-6xl text-white mb-8">
            Ready for your new nails?
          </h2>
          <div className="relative z-10 flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/628123456789" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-white text-kuku-primary rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
            >
              WhatsApp Us
            </a>
            <a 
              href="https://instagram.com/kuku___ruru" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              See Designs
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-kuku-text/60">
          <div>
            <span className="font-display text-2xl font-bold text-kuku-primary mr-2">Kukururu</span>
            <br className="md:hidden" />
            &copy; {new Date().getFullYear()} Kukururu. Handmade with soul.
          </div>
          
          <div className="flex gap-6 font-medium">
            <a href="https://instagram.com/kuku___ruru" className="hover:text-kuku-primary transition-colors">Instagram</a>
            <a href="https://shopee.co.id/Kukuru" className="hover:text-kuku-primary transition-colors">Shopee</a>
            <a href="https://wa.me/628123456789" className="hover:text-kuku-primary transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-kuku-primary transition-colors">Privacy</a>
          </div>
          
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-kuku-highlight/40 flex items-center justify-center text-lg">🌸</div>
            <div className="w-8 h-8 rounded-full bg-kuku-green/40 flex items-center justify-center text-lg">✨</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
