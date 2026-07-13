import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CreatorGrid from '../components/creators/CreatorGrid';

export default function Creators() {
  useEffect(() => {
    document.title = 'Creators — Influnex Media';
  }, []);

  return (
    <main className="min-h-screen bg-[#05010f] pt-24 transition-colors duration-300">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="glow-orb glow-orb-blue w-[600px] h-[300px] top-0 left-1/2 -translate-x-1/2 opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-6">Our Creator Network</span>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Creators in our <span className="gradient-text">portfolio</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We work with verified creators every day. Explore the accounts in our network that help brands turn content into clicks, signups, and sales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <CreatorGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 border-t border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="glow-orb glow-orb-cyan w-[400px] h-[200px] top-0 right-1/4 opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
              Want to work with these creators?
            </h2>
            <p className="text-slate-300 mb-8">
              Tell us about your campaign and we'll match you with the perfect creators from our network.
            </p>
            <a href="/collaborate" className="btn-primary inline-flex items-center gap-2">
              Start a Campaign
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
