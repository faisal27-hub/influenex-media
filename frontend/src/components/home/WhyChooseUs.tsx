import { motion } from 'framer-motion';
import { CheckCircle, Zap, MessageSquare, Eye, Target, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Verified Creator Network',
    desc: 'Every creator in our network passes a rigorous vetting process — audience quality, engagement authenticity, brand safety, and niche fit.',
  },
  {
    icon: Target,
    title: 'Creative Campaign Planning',
    desc: 'We design campaigns from scratch around your goals — not templated packages. Every brief is custom, every creator selected intentionally.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: 'No black boxes. You get clear timelines, regular updates, and full visibility into campaign performance at every stage.',
  },
  {
    icon: Eye,
    title: 'Dedicated Support',
    desc: 'A dedicated campaign manager handles your brand from onboarding to final reporting — one point of contact, zero confusion.',
  },
  {
    icon: Zap,
    title: 'Fast Campaign Execution',
    desc: 'From kickoff to live content in as little as 4 weeks. We built our workflows to move at the speed your brand demands.',
  },
  {
    icon: Rocket,
    title: 'Performance-Focused Strategy',
    desc: 'Every decision — creator tier, platform, content format — is driven by your funnel metrics and business goals.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#05010f] transition-colors duration-300">
      {/* Background */}
      <div className="glow-orb glow-orb-purple w-[600px] h-[400px] top-1/2 -translate-y-1/2 right-0 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Why Influnex</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 transition-colors duration-300">
            Six reasons brands <span className="gradient-text">choose us</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto transition-colors duration-300">
            We're built differently — and the results show it.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative p-7 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent transition-all duration-500 group hover:border-purple-500/20"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-2xl mb-5 flex items-center justify-center bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <reason.icon size={20} className="text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-white text-base mb-3 transition-colors duration-300">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed transition-colors duration-300">{reason.desc}</p>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
