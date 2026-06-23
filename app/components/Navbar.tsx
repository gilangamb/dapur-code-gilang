import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-kuku-bg/80 backdrop-blur-md border-b border-kuku-text/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-3xl font-bold text-kuku-primary">
          Kukururu
        </a>
        <div className="hidden md:flex items-center gap-8 text-kuku-text font-medium">
          <a href="#about" className="hover:text-kuku-primary transition-colors">Gallery</a>
          <a href="#process" className="hover:text-kuku-primary transition-colors">Process</a>
          <a href="#menu" className="hover:text-kuku-primary transition-colors">Pricing</a>
          <a href="#guide" className="hover:text-kuku-primary transition-colors">Custom</a>
          <a 
            href="#order" 
            className="px-6 py-2 bg-kuku-primary text-white rounded-full hover:bg-kuku-primary/90 transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
