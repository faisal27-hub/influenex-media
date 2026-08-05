import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const values = [
  {
    icon: '🎯',
    title: 'Authenticity First',
    desc: 'No fake reach, no inflated numbers. Every creator is vetted. Every campaign is real.',
  },
  {
    icon: '📈',
    title: 'Performance Over Vanity',
    desc: 'We optimize for your funnel metrics — traffic, leads, conversions — not just likes.',
  },
  {
    icon: '📋',
    title: 'Transparent Operations',
    desc: 'Written contracts. Clear timelines. No hidden fees. Full visibility at every stage.',
  },
  {
    icon: '🤝',
    title: 'Creator-First Culture',
    desc: 'Fair deals, clear briefs, timely payments. We respect creators as the professionals they are.',
  },
  {
    icon: '🌐',
    title: 'Multi-Category Expertise',
    desc: 'Technology, Fashion, Beauty, Lifestyle, Food, Travel, Gaming, Finance, Entertainment.',
  },
  {
    icon: '🏆',
    title: 'Long-Term Partnerships',
    desc: 'We build relationships, not transactions. The best campaigns start with trust.',
  },
];

const categories = [
  {
    title: 'Technology',
    emoji: '💻',
    video: '/videos/technology.mp4',
    desc: 'Connecting brands with tech-savvy creators breaking down software, gadgets, and next-gen AI tools.'
  },
  {
    title: 'Fashion',
    emoji: '👗',
    video: '/videos/fashion.mp4',
    desc: 'Curating lookbooks, styling guides, and aesthetic apparel campaigns with trend-setting fashion icons.'
  },
  {
    title: 'Beauty',
    emoji: '💄',
    video: '/videos/beauty.mp4',
    desc: 'Showcasing cosmetics, skincare routines, and makeup tutorials with high-engagement beauty creators.'
  },
  {
    title: 'Lifestyle',
    emoji: '✨',
    video: '/videos/lifestyle.mp4',
    desc: 'Inspiring audiences through daily vlogs, wellness routines, cozy setups, and aesthetic lifestyle stories.'
  },
  {
    title: 'Food',
    emoji: '🍳',
    video: '/videos/food.mp4',
    desc: 'Sizzling recipe breakdowns, café reviews, and culinary showcases with top food bloggers and chefs.'
  },
  {
    title: 'Travel',
    emoji: '✈️',
    video: '/videos/travel.mp4',
    desc: 'Capturing wanderlust with scenic drone footage, resort reviews, and local adventure diaries.'
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    video: '/videos/gaming.mp4',
    desc: 'Partnering with gaming creators for console reviews, streaming highlights, and tech setups.'
  },
  {
    title: 'Finance',
    emoji: '📈',
    video: '/videos/finance.mp4',
    desc: 'Educating audiences on stock market charts, personal investing roadmap plans, and economic breakdowns.'
  },
  {
    title: 'Entertainment',
    emoji: '🎬',
    video: '/videos/entertainment.mp4',
    desc: 'Driving hype for product launches, cinema releases, and comedy sketches with viral entertainers.'
  }
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.title = 'About Us — Influnex Media';
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  return (
    <main className="min-h-screen bg-[#05010f] pt-24 overflow-x-hidden transition-colors duration-300">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="glow-orb glow-orb-blue w-[700px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-15" />
        <div className="glow-orb glow-orb-cyan w-[300px] h-[200px] bottom-0 right-0 opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="section-label mb-6">Our Story</span>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              We exist to make
              <br />
              <span className="gradient-text">creator marketing work</span>
              <br />
              for real brands.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Influnex Media was built for brands that are tired of influencer marketing that looks good on paper but delivers nothing in the funnel. We're a premium agency that connects brands with verified creators across Technology, Fashion, Beauty, Lifestyle, Food, Travel, Gaming, Finance, and Entertainment — and we prove every campaign with real metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-6">Our Mission</span>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6 leading-tight">
              Connecting brands with creators that <span className="gradient-text">actually convert</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Our mission is simple: make influencer marketing the most predictable and ROI-positive channel in your marketing mix. We do this by obsessing over creator quality, campaign strategy, and transparent operations.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Every brand that works with Influnex Media gets a dedicated team that understands their product, their audience, and their goals — and builds a campaign strategy around all three.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #e81cff, transparent)' }}
              />
              <div className="text-4xl mb-6 text-accent">"</div>
              <p className="text-slate-200 text-xl font-light leading-relaxed mb-8 italic">
                We don't just run campaigns. We build creator partnerships that generate real business outcomes — traffic, leads, and revenue that compound over time.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png?v=2"
                  alt="Influnex Media Logo"
                  className="h-9 w-auto object-contain"
                />
                <div>
                  <div className="text-white font-semibold text-sm">Influnex Media</div>
                  <div className="text-slate-400 text-xs font-mono">influnexmedia.in@gmail.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4">What We Stand For</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Our <span className="gradient-text">core values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-7 group hover:border-accent/20 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-display font-bold text-white text-base mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4">Creator Categories</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              We work across <span className="gradient-text">every category</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Our creator network spans all major niches — so whatever your brand sells, we have the right creator for it.
            </p>
          </motion.div>

          {/* Premium Auto-changing Category Showcase Slider */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#05010f] h-[420px] md:h-[480px] shadow-2xl flex flex-col justify-end p-8 md:p-16 group animate-glow-subtle"
          >
            {/* Background Video (Only active is rendered for lazy-load + performance) */}
            <div className="absolute inset-0 w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full bg-[#05010f]"
                >
                  <video
                    src={categories[activeIndex].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtle Gradient & Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05010f] via-[#05010f]/45 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[#05010f]/20 pointer-events-none" />

            {/* Content Section */}
            <div className="relative z-10 max-w-2xl text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl">{categories[activeIndex].emoji}</span>
                    <h3 className="font-display font-bold text-2xl md:text-4xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {categories[activeIndex].title}
                    </h3>
                  </div>
                  <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {categories[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Bottom controls row (dots + navigation arrows) */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10 w-full">
                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {categories.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-6 bg-accent' : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white transition-all active:scale-95"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center text-white transition-all active:scale-95"
                    aria-label="Next slide"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              Ready to start <span className="gradient-text">your campaign?</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Let's have a conversation about your brand, goals, and how Influnex Media can help you get there.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Let's Collaborate <ArrowRight size={16} />
              </Link>
              <Link to="/creators" className="btn-secondary inline-flex items-center gap-2">
                Meet Our Creators
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
