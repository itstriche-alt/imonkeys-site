import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    text: 'Fixed my iPhone screen in under 30 minutes! Looks brand new and the price was way better than the Apple Store.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mike T.',
    text: 'Traded in my old iPad and got a great deal on a newer model. Super friendly staff and very transparent pricing.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily R.',
    text: 'Thought my phone was dead after dropping it in the pool. They managed to recover all my photos and get it working again. Lifesavers!',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-6 relative z-10 bg-navy-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-medium text-sm mb-6">
            <Star className="w-4 h-4 fill-yellow-400" />
            5-Star Rated Service
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Customer <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. See what our customers have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-slate-400 font-medium">Verified Customer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
