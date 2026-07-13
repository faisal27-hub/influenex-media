import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleCanvas from './ParticleCanvas';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#05010f] transition-colors duration-300">
      {/* Three.js Background particles */}
      <ParticleCanvas />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05010f]/40 via-transparent to-[#05010f] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/30 via-transparent to-[#05010f]/30 pointer-events-none" />

      {/* Center radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 bg-purple-600 rounded-full blur-[150px] pointer-events-none transition-opacity duration-300" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] opacity-15 bg-cyan-500 rounded-full blur-[100px] pointer-events-none transition-opacity duration-300" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32 pb-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.2] tracking-tight text-center mb-8 text-white max-w-4xl"
          >
            Creating Powerful Connections Between <span className="gradient-text">Brands & Creators</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal text-balance"
          >
            Helping brands collaborate with trusted creators to build authentic campaigns that drive real engagement and long-term growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={item}
            className="flex items-center justify-center mb-0"
          >
            <Link 
              to="/contact" 
              className="btn-primary text-xl px-20 py-7 rounded-full shadow-[0_0_36px_rgba(147,51,234,0.3)] hover:shadow-[0_0_48px_rgba(6,182,212,0.45)] transition-all duration-300 active:scale-95 tracking-wider font-bold"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
