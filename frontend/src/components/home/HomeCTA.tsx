import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-[#05010f] transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      
      {/* Glowing background meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-full blur-[160px] opacity-20 pointer-events-none transition-opacity duration-300" />
      <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-purple-500 rounded-full blur-[130px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-12 md:p-24 shadow-2xl transition-colors duration-300"
        >
          {/* Inner ambient orbs for texture */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Sparkle badge */}
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="section-label mb-8"
            >
              Let's collaborate
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-[1.15] tracking-tight max-w-3xl transition-colors duration-300"
            >
              Ready to build your next <br />
              <span className="gradient-text">successful campaign?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-slate-300 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300"
            >
              Join brands that trust Influnex Media to connect them with the right creators, execute flawlessly, and prove real impact.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="btn-primary w-full sm:w-auto text-base px-10 py-4.5 flex items-center justify-center gap-2 group shadow-xl hover:shadow-accent/10"
              >
                <span>Let's Collaborate</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/creators"
                className="btn-secondary w-full sm:w-auto text-base px-10 py-4.5 flex items-center justify-center border border-white/10"
              >
                <span>Explore Creators</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
