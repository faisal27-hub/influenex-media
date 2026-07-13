import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3, Heart } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Fast Execution',
    desc: 'From kickoff to live content in weeks, not months. We move at the speed of culture.',
  },
  {
    icon: Shield,
    title: 'Zero-Drama Operations',
    desc: 'Every campaign runs on written contracts — deliverables, payments, disclosures, NDAs.',
  },
  {
    icon: BarChart3,
    title: 'Performance-First',
    desc: 'We measure clicks, signups, and revenue — not just impressions and likes.',
  },
  {
    icon: Heart,
    title: 'Creator-First Culture',
    desc: "We treat creators like the professionals they are — fair deals, clear briefs, timely payments.",
  },
];

export default function AboutSnippet() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#05010f] transition-colors duration-300">
      {/* Background */}
      <div className="glow-orb glow-orb-cyan w-[500px] h-[300px] top-0 right-0 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="section-label mb-6">Who We Are</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 leading-tight transition-colors duration-300">
              We're not just an agency. <br />
              <span className="gradient-text">We're your creator-ops team.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 transition-colors duration-300">
              Influnex Media is a premium influencer marketing agency that connects brands with verified creators across every category — from Technology and Finance to Fashion, Beauty, Lifestyle, Travel, Food, Gaming, and Entertainment.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 transition-colors duration-300">
              We engineer campaigns that turn creator content into traffic, signups, and revenue — handling strategy, sourcing, contracts, compliance, and reporting end-to-end.
            </p>
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Right: Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="glass-card p-6 group hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300">
                  <v.icon size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2 transition-colors duration-300">{v.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed transition-colors duration-300">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
