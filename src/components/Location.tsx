import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="find-us" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Find <span className="text-gradient">Us</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Conveniently located in Louisville, KY.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Address</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    2315 Bardstown Rd<br />
                    Louisville, KY 40205
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Hours</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Mon–Fri 10am–6pm<br />
                    <span className="text-slate-500 text-sm font-medium">Sat-Sun Closed</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="tel:+15024435435" 
                className="group flex-1 inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 mr-3 text-emerald-400" />
                (502) 443-5435
              </a>
              <a 
                href="mailto:Imonkeys502@gmail.com" 
                className="group flex-1 inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                <Mail className="w-5 h-5 mr-3 text-pink-400" />
                Email Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden glow-border group"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #E6006F 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-pink-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(230,0,111,0.6)] mb-4 animate-bounce">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="glass-panel px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase text-white shadow-xl border-white/20">
                  Interactive Map
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
