import { motion } from 'motion/react';
import { ArrowRight, Smartphone, RefreshCw } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-medium text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          Louisville's Trusted Repair Shop
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
          Fast Device Repairs in <span className="text-gradient">Louisville</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          We fix phones, tablets, and computers quickly and affordably. 
          Looking to upgrade? We also buy and sell new and used devices for top dollar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#estimate" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-pink-600 hover:bg-pink-500 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(230,0,111,0.5)] w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Get Fixed
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#services" 
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            <RefreshCw className="w-5 h-5 mr-2 text-indigo-400" />
            Sell Device
          </a>
        </div>
      </motion.div>
    </section>
  );
}
