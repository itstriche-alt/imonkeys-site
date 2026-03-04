import { ArrowRight, Smartphone, Star, StarHalf } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-24 lg:pt-28 px-6 flex flex-col items-center justify-start min-h-0 text-center overflow-hidden">
      {/* Cyber Grid Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto z-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-medium text-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          Louisville's Trusted Repair Shop
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
          Fast iPhone, Samsung, and Laptop Repairs in <span className="text-gradient">Louisville</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          We fix phones, tablets, and computers quickly and affordably. <br className="hidden sm:block" />
          Looking to upgrade? We also buy and sell new and used <span className="font-semibold text-white">iPhones, iPads, Macbooks, Samsungs</span>, and more for top dollar.
        </p>

        <div className="flex items-center justify-center">
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
        </div>

        {/* Hero Google RevBadge */}
        <div className="mt-12 flex justify-center w-full animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <a
            href="https://www.google.com/maps/place/Imonkeys/@38.2197547,-85.6975252,14.85z/data=!4m17!1m8!3m7!1s0x88690ca6821751c7:0xe79b12af729325a9!2sImonkeys!8m2!3d38.2240889!4d-85.6895946!10e1!16s%2Fg%2F11cs3zc3x_!3m7!1s0x88690ca6821751c7:0xe79b12af729325a9!8m2!3d38.2240889!4d-85.6895946!9m1!1b1!16s%2Fg%2F11cs3zc3x_?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 px-6 py-4 bg-navy-900/40 hover:bg-navy-800/60 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl sm:rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-10px_rgba(255,255,255,0.03)] mx-auto"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black text-white mr-1">4.8</span>
              <div className="flex -space-x-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                ))}
                <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/10"></div>

            <div className="flex items-center gap-3">
              <span className="text-slate-200 font-bold text-sm tracking-wide">
                Read our reviews on <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">Google</span>
              </span>
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <span className="text-slate-300 text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
