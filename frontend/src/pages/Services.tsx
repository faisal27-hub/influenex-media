import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';

const colorMap: Record<
  string,
  { text: string; bg: string; check: string }
> = {
  blue:   { text: 'text-accent',    bg: 'bg-white/5 border border-white/10',    check: 'text-accent'    },
  cyan:   { text: 'text-cyan-400',    bg: 'bg-white/5 border border-white/10',    check: 'text-cyan-400'    },
  purple: { text: 'text-pink-400',  bg: 'bg-white/5 border border-white/10',  check: 'text-pink-400'  },
  pink:   { text: 'text-pink-400',    bg: 'bg-white/5 border border-white/10',    check: 'text-pink-400'    },
  red:    { text: 'text-red-400',     bg: 'bg-white/5 border border-white/10',     check: 'text-red-400'     },
  amber:  { text: 'text-amber-400',   bg: 'bg-white/5 border border-white/10',   check: 'text-amber-400'   },
  teal:   { text: 'text-teal-400',    bg: 'bg-white/5 border border-white/10',    check: 'text-teal-400'    },
  green:  { text: 'text-emerald-400', bg: 'bg-white/5 border border-white/10', check: 'text-emerald-400' },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Services() {
  useEffect(() => {
    document.title = 'Services — Influnex Media';
  }, []);

  return (
    <div className="min-h-screen bg-[#05010f] text-white overflow-x-hidden pt-24 transition-colors duration-300">
      {/* Dot-grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--dot-grid-color) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-violet-600/4 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-600/4 blur-[100px]" />
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex justify-center mb-6"
          >
            <span className="section-label">Our Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
          >
            Full-Service <span className="gradient-text">Influencer Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            From strategy to reporting, we handle every step so your brand can focus on growth.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, i) => {
              const accent = colorMap[service.color] ?? colorMap['blue'];

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariant}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="glass-card p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-accent/20 transition-colors duration-300 flex flex-col gap-6 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl ${accent.bg} flex items-center justify-center flex-shrink-0 font-mono text-base font-bold`}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-[15px]">
                    {service.description}
                  </p>

                  <div className="h-px w-full bg-white/5" />

                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature: string, fi: number) => (
                      <li key={fi} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full ${accent.bg} flex items-center justify-center`}>
                          <Check className={`w-3 h-3 ${accent.check}`} strokeWidth={2.5} />
                        </span>
                        <span className="text-slate-200 text-sm leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-32 px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative max-w-3xl mx-auto text-center glass-card rounded-3xl border border-white/5 p-12 lg:p-16"
        >
          <div className="flex justify-center mb-5">
            <span className="section-label">Get Started</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5 text-white">
            Ready to <span className="gradient-text">launch your campaign?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Partner with Influnex Media and turn authentic creator content into measurable brand growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Start a Campaign
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/creators" className="btn-secondary inline-flex items-center justify-center gap-2">
              Meet Our Creators
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
