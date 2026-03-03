import { motion } from 'motion/react';
import { Smartphone, RefreshCw, Droplets, Battery, Monitor, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    id: 'repair',
    title: 'Device Repair',
    description: 'Expert repairs for all major brands. We fix screens, batteries, water damage, and more.',
    icon: Smartphone,
    features: ['iPhone & Android Screens', 'Battery Replacement', 'Water Damage Recovery', 'iPad & Tablet Repair'],
    color: 'from-pink-500 to-rose-500',
    bgImage: 'radial-gradient(circle at 100% 0%, rgba(230,0,111,0.15) 0%, transparent 50%)'
  },
  {
    id: 'trade',
    title: 'Buy & Sell',
    description: 'Turn your old devices into cash or upgrade to a certified pre-owned device from our inventory.',
    icon: RefreshCw,
    features: ['Top Dollar for Trades', 'Certified Pre-Owned', 'Data Transfer Included', '90-Day Warranty'],
    color: 'from-indigo-500 to-blue-500',
    bgImage: 'radial-gradient(circle at 100% 0%, rgba(99,102,241,0.15) 0%, transparent 50%)'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Professional solutions for all your device needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
                style={{ perspective: 1000 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden glow-border flex flex-col" style={{ backgroundImage: service.bgImage }}>
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-3 h-3 text-pink-400" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hidden content reveal on hover */}
                  <div className="mt-8 pt-6 border-t border-white/10 overflow-hidden">
                    <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center text-pink-400 font-bold text-sm uppercase tracking-wider">
                      Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
