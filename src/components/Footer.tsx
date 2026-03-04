import { Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../img/logo_alt.webp';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-transparent">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand */}
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
          <a href="#home" className="inline-block w-full max-w-[220px]">
            <div className="hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="iMonkeys"
                className="w-full h-auto object-contain"
                width="400"
                height="148"
                loading="lazy"
              />
            </div>
          </a>
          <p className="text-slate-300 text-sm leading-relaxed max-w-[220px]">
            Louisville's go-to shop for fast, affordable device repairs and quality used phones.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://www.facebook.com/iMonkeysLLC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/40 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-all hover:scale-110 active:scale-95"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2 — Navigate */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigate</h4>
          <nav className="flex flex-col gap-2.5">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Repair Estimate', href: '#estimate' },
              { label: 'Services', href: '#services' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Find Us', href: '#find-us' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-300 hover:text-white transition-colors w-fit"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Contact</h4>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+15024435435"
              className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group w-fit"
            >
              <Phone className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              (502) 443-5435
            </a>
            <a
              href="mailto:Imonkeys502@gmail.com"
              className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group w-fit"
            >
              <Mail className="w-3.5 h-3.5 text-pink-500 shrink-0" />
              Imonkeys502@gmail.com
            </a>
          </div>
        </div>

        {/* Col 4 — Hours & Location */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-widest">Visit Us</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
              <a href="https://www.google.com/maps/place/Imonkeys/@38.2197547,-85.6975252,14z/data=!4m15!1m8!3m7!1s0x88690ca6821751c7:0xe79b12af729325a9!2sImonkeys!8m2!3d38.2240889!4d-85.6895946!10e1!16s%2Fg%2F11cs3zc3x_!3m5!1s0x88690ca6821751c7:0xe79b12af729325a9!8m2!3d38.2240889!4d-85.6895946!16s%2Fg%2F11cs3zc3x_?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 leading-relaxed hover:text-pink-400 transition-colors font-semibold group block">
                <span className="group-hover:underline">2315 Bardstown Rd</span><br />
                <span className="group-hover:underline">Louisville, KY 40205</span>
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
              <span className="text-sm text-slate-300 leading-relaxed">
                Mon–Fri 10am–6pm<br />
                <span className="text-slate-400">Sat–Sun Closed</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} iMonkeys. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs">
          Louisville, KY · Device Repair &amp; Buy/Sell
        </p>
      </div>

    </footer>
  );
}
