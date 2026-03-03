import { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone } from 'lucide-react';

export default function Nav() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center shrink-0">
          {!imgError ? (
            <div className="bg-white px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(230,0,111,0.15)] transition-transform hover:scale-105">
              <img 
                src="/logo.png" 
                alt="iMonkeys Logo" 
                className="h-6 sm:h-8 w-auto object-contain" 
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
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#estimate" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Repair</a>
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#find-us" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Find Us</a>
        </div>
        
        <a 
          href="tel:+15024435435" 
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          (502) 443-5435
        </a>
      </div>
    </motion.nav>
  );
}
