import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

const iconColorMap: Record<string, string> = {
  blue: 'text-accent bg-white/5 border-white/10',
  cyan: 'text-cyan-400 bg-white/5 border-white/10',
  purple: 'text-pink-400 bg-white/5 border-white/10',
  pink: 'text-pink-400 bg-white/5 border-white/10',
  red: 'text-red-400 bg-white/5 border-white/10',
  amber: 'text-amber-400 bg-white/5 border-white/10',
  teal: 'text-teal-400 bg-white/5 border-white/10',
  green: 'text-emerald-400 bg-white/5 border-white/10',
};

export default function ServicesPreview() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#05010f] transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="glow-orb glow-orb-blue w-[500px] h-[300px] bottom-0 left-1/4 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">What We Do</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 transition-colors duration-300">
            Full-service <span className="gradient-text">campaign execution</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
            From strategy to reporting, we handle every step of your influencer campaign so you can focus on building your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="service-card group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl mb-5 flex items-center justify-center font-mono text-sm font-bold border ${iconColorMap[service.color]}`}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-white text-base mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5 transition-colors duration-300">
                {service.description.slice(0, 90)}...
              </p>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.slice(0, 2).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-400 text-xs transition-colors duration-300">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <div className="mt-5 flex items-center gap-2 text-accent text-xs font-mono tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline inline-flex items-center gap-2">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
