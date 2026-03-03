import { useState } from 'react';
import { Smartphone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="py-8 md:py-12 px-6 relative z-10 border-t border-white/10 bg-navy-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#home" className="flex items-center shrink-0">
          {!imgError ? (
            <div className="bg-white px-4 py-2.5 rounded-2xl shadow-[0_0_20px_rgba(230,0,111,0.15)] transition-transform hover:scale-105">
              <img 
                src="/logo.png" 
                alt="iMonkeys Logo" 
                className="h-10 sm:h-12 w-auto object-contain" 
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                i<span className="text-pink-400">Monkeys</span>
              </span>
            </div>
          )}
        </a>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-slate-400 text-sm font-medium text-center">
          <a href="tel:+15024435435" className="hover:text-pink-400 transition-colors">(502) 443-5435</a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></span>
          <a href="mailto:Imonkeys502@gmail.com" className="hover:text-pink-400 transition-colors">Imonkeys502@gmail.com</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all hover:scale-110 active:scale-95">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all hover:scale-110 active:scale-95">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-all hover:scale-110 active:scale-95">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} iMonkeys. All rights reserved.
      </div>
    </footer>
  );
}
