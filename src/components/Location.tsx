import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="find-us" className="py-12 md:py-16 px-6 relative z-10">
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
            Conveniently located in <a href="https://www.google.com/maps/place/Imonkeys/@38.2197547,-85.6975252,14.85z/data=!4m17!1m8!3m7!1s0x88690ca6821751c7:0xe79b12af729325a9!2sImonkeys!8m2!3d38.2240889!4d-85.6895946!10e1!16s%2Fg%2F11cs3zc3x_!3m7!1s0x88690ca6821751c7:0xe79b12af729325a9!8m2!3d38.2240889!4d-85.6895946!9m1!1b1!16s%2Fg%2F11cs3zc3x_?entry=ttu" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 hover:underline transition-colors font-semibold">Louisville, KY</a>.
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
            <motion.a
              href="https://www.google.com/maps/place/Imonkeys/@38.2197547,-85.6975252,14.85z/data=!4m17!1m8!3m7!1s0x88690ca6821751c7:0xe79b12af729325a9!2sImonkeys!8m2!3d38.2240889!4d-85.6895946!10e1!16s%2Fg%2F11cs3zc3x_!3m7!1s0x88690ca6821751c7:0xe79b12af729325a9!8m2!3d38.2240889!4d-85.6895946!9m1!1b1!16s%2Fg%2F11cs3zc3x_?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group block cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Pink glow line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Address</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    2315 Bardstown Rd<br />
                    Louisville, KY 40205
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-pink-400 group-hover:text-pink-300 transition-colors">
                    Open in Maps
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </div>
            </motion.a>

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
            className="relative h-[500px] rounded-3xl overflow-hidden glow-border"
          >
            <iframe
              title="iMonkeys Location"
              src="https://maps.google.com/maps?q=iMonkeys,+2315+Bardstown+Rd,+Louisville,+KY+40205&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
