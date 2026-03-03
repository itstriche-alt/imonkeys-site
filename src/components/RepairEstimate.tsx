import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Battery, Square, Monitor, PenTool, Bot, Wrench, PhoneCall, Info } from 'lucide-react';

const PRICING: Record<string, [string, number][] | null> = {
  iphone_screen: [
    ["iPhone 6",30],["iPhone 6s",30],["iPhone 6s Plus",35],
    ["iPhone 7",35],["iPhone 7 Plus",40],["iPhone 8",40],
    ["iPhone 8 Plus",45],["iPhone X",55],["iPhone XS",55],
    ["iPhone XS Max",70],["iPhone XR",55],["iPhone 11",60],
    ["iPhone 11 Pro",70],["iPhone 11 Pro Max",80],["iPhone 12",100],
    ["iPhone 12 Mini",100],["iPhone 12 Pro",100],["iPhone 12 Pro Max",125],
  ],
  iphone_battery: [
    ["iPhone 6",30],["iPhone 6 Plus",50],["iPhone 6S",40],
    ["iPhone 6S Plus",55],["iPhone SE",65],["iPhone 7",63],
    ["iPhone 7 Plus",67],["iPhone 8",60],["iPhone 8 Plus",60],
    ["iPhone X",60],["iPhone XR",69],["iPhone XS",75],
    ["iPhone XS Max",70],["iPhone 11",70],["iPhone 11 Pro",75],
    ["iPhone 11 Pro Max",80],["iPhone 12",85],["iPhone 12 Pro",90],
    ["iPhone 12 Pro Max",110],["iPhone 13",90],["iPhone 13 Mini",85],
    ["iPhone 13 Pro",130],["iPhone 13 Pro Max",150],["iPhone 14",100],
    ["iPhone 14 Plus",110],["iPhone 14 Pro",150],["iPhone 14 Pro Max",170],
    ["iPhone 15",160],["iPhone 15 Plus",170],
  ],
  iphone_backglass: [
    ["iPhone 8",70],["iPhone 8 Plus",70],["iPhone X",70],
    ["iPhone XS",70],["iPhone XR",70],["iPhone 11",85],
    ["iPhone 11 Pro",90],["iPhone 11 Pro Max",90],["iPhone 12",90],
    ["iPhone 12 Mini",90],["iPhone 12 Pro",100],["iPhone 12 Pro Max",100],
    ["iPhone 13",95],["iPhone 13 Mini",95],["iPhone 13 Pro",120],
    ["iPhone 13 Pro Max",120],["iPhone 14",85],["iPhone 14 Plus",85],
    ["iPhone 14 Pro",130],["iPhone 14 Pro Max",130],["iPhone 15",100],
    ["iPhone 15 Plus",100],["iPhone 15 Pro",120],["iPhone 15 Pro Max",120],
  ],
  ipad_glass: [
    ["iPad 4th generation",60],["iPad 5th generation",90],
    ["iPad 6th generation",90],["iPad 7th generation",90],
    ["iPad 8th generation",90],["iPad 9th generation",100],
    ["iPad mini 1st generation",60],["iPad mini 2nd generation",75],
    ["iPad mini 3rd generation",75],["iPad mini 4th generation",140],
    ["iPad mini 5th generation",145],["iPad Air 2nd generation",170],
    ["iPad Air 3rd generation",200],["iPad Air 4th generation",225],
    ["iPad Pro 9.7\" (1st gen)",185],["iPad Pro 10.5\" (1st gen)",200],
    ["iPad Pro 11\" (2nd gen)",240],["iPad Pro 11\" (3rd gen)",340],
  ],
  ipad_digitizer: [
    ["iPad 5th generation",70],["iPad 6th generation",70],
    ["iPad 8th generation",80],["iPad 9th generation",90],
    ["iPad 10th generation",110],["iPad Air 4th generation",200],
  ],
  samsung: null,
};

const SERVICES = [
  { id: 'iphone_screen', label: 'iPhone Screen Repair', icon: Smartphone },
  { id: 'iphone_battery', label: 'iPhone Battery', icon: Battery },
  { id: 'iphone_backglass', label: 'iPhone Back Glass', icon: Square },
  { id: 'ipad_glass', label: 'iPad Glass Fix', icon: Monitor },
  { id: 'ipad_digitizer', label: 'iPad Digitizer', icon: PenTool },
  { id: 'samsung', label: 'Samsung Screen', icon: Bot },
];

export default function RepairEstimate() {
  const [currentService, setCurrentService] = useState<string | null>(null);
  const [currentModelPrice, setCurrentModelPrice] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCall, setIsCall] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleServiceSelect = (id: string) => {
    setCurrentService(id);
    setCurrentModelPrice('');
    setShowResult(false);
  };

  const handleSubmit = () => {
    if (!currentService) {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 500);
      return;
    }

    if (currentService === 'samsung') {
      setIsCall(true);
      setShowResult(true);
      return;
    }

    if (!currentModelPrice) {
      document.getElementById('modelSelect')?.focus();
      return;
    }

    setIsCall(false);
    setShowResult(true);
  };

  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [showResult]);

  const activeIcon = SERVICES.find(s => s.id === currentService)?.icon || Wrench;
  const ActiveIconComponent = activeIcon;

  return (
    <section id="estimate" className="py-16 md:py-24 px-6 flex items-center justify-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[460px] bg-navy-950/80 backdrop-blur-2xl rounded-[24px] border border-white/10 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] relative"
      >
        {/* Top Accent Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80"></div>

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-white/5">
          <div className="inline-flex items-center gap-1.5 bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[0.72rem] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
            Instant Pricing
          </div>
          <h2 className="text-[1.65rem] font-extrabold text-slate-50 tracking-tight leading-[1.1]">
            Repair <span className="text-gradient">Estimate</span>
          </h2>
          <p className="mt-2 text-[0.84rem] text-slate-400 leading-relaxed">
            Select your device and service to see pricing in seconds — no sign-up needed.
          </p>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Step 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-navy-800 border border-white/10 text-[0.65rem] font-bold text-pink-500 flex items-center justify-center shrink-0">
                1
              </div>
              <span className="text-[0.75rem] font-semibold text-slate-300 uppercase tracking-widest">
                Choose a repair type
              </span>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 gap-2"
              animate={wiggle ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              {SERVICES.map((service) => {
                const isSelected = currentService === service.id;
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all duration-200 relative overflow-hidden ${
                      isSelected 
                        ? 'bg-pink-500/10 border-pink-500/50 shadow-[inset_0_0_0_1px_rgba(230,0,111,0.3)]' 
                        : 'bg-navy-900/50 border-white/5 hover:border-white/20 hover:bg-navy-800/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-pink-400' : 'text-slate-400'}`} />
                    <span className={`text-[0.78rem] font-semibold leading-snug ${isSelected ? 'text-pink-200' : 'text-slate-400'}`}>
                      {service.label}
                    </span>
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-pink-500 flex items-center justify-center">
                        <svg viewBox="0 0 8 8" fill="none" stroke="#fff" strokeWidth="1.5" className="w-2 h-2">
                          <polyline points="1.5 4 3 5.5 6.5 2" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Step 2 */}
          <AnimatePresence>
            {currentService && currentService !== 'samsung' && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-navy-800 border border-white/10 text-[0.65rem] font-bold text-pink-500 flex items-center justify-center shrink-0">
                    2
                  </div>
                  <span className="text-[0.75rem] font-semibold text-slate-300 uppercase tracking-widest">
                    Select your model
                  </span>
                </div>
                <div className="relative">
                  <select
                    id="modelSelect"
                    value={currentModelPrice}
                    onChange={(e) => {
                      setCurrentModelPrice(e.target.value);
                      if (showResult) setShowResult(false);
                    }}
                    className="w-full p-3.5 pl-4 pr-10 bg-navy-900/80 border border-white/10 rounded-xl text-slate-200 text-sm font-medium appearance-none outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all cursor-pointer"
                  >
                    <option value="">— choose model —</option>
                    {PRICING[currentService]?.map(([name, price]) => (
                      <option key={name as string} value={price as number}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 p-4 bg-gradient-to-br from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white border-none rounded-xl font-bold text-[0.95rem] tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(230,0,111,0.3)] transition-all hover:shadow-[0_6px_28px_rgba(230,0,111,0.4)] active:scale-[0.98]"
          >
            <Wrench className="w-4 h-4" />
            Get My Estimate
          </button>

          {/* Result */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                ref={resultRef}
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mt-4 overflow-hidden rounded-2xl"
              >
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-pink-500/30 rounded-2xl p-6 relative overflow-hidden">
                  {/* Glow blob inside result */}
                  <div className="absolute -top-10 -right-10 w-[140px] h-[140px] rounded-full bg-pink-500/20 blur-[40px] pointer-events-none"></div>
                  
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div>
                      <div className="text-[0.72rem] font-bold uppercase tracking-widest text-indigo-300 mb-1.5">
                        Estimated Repair Cost
                      </div>
                      {isCall ? (
                        <div className="text-2xl font-bold text-pink-300 tracking-tight">
                          Call for Pricing
                          <a href="tel:+15024435435" className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white rounded-lg font-bold text-sm shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all active:scale-95">
                            <PhoneCall className="w-4 h-4" />
                            (502) 443-5435
                          </a>
                        </div>
                      ) : (
                        <div className="text-5xl font-extrabold text-white tracking-tighter leading-none">
                          <sup className="text-2xl font-bold align-super mr-1">$</sup>
                          {currentModelPrice}
                        </div>
                      )}
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400">
                      <ActiveIconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="h-[1px] bg-pink-500/20 my-4 relative z-10"></div>
                  
                  <div className="flex items-center gap-1.5 text-[0.78rem] text-indigo-300 relative z-10">
                    <Info className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {isCall 
                        ? 'Tap to call us for a Samsung repair quote.' 
                        : 'Price is an estimate. Final cost confirmed at drop-off.'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </section>
  );
}
