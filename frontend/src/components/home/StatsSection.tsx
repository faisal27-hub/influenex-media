import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.floor(easedProgress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 200,
    suffix: '+',
    label: 'Verified Creators',
    description: 'Across every category and niche',
    icon: '✦',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Successful Campaigns',
    description: 'Delivered with measurable results',
    icon: '◈',
  },
  {
    value: 15,
    suffix: 'M+',
    label: 'Campaign Reach',
    description: 'Real audiences, real impact',
    icon: '⬡',
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden border-t border-white/5 bg-white/[0.01] transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="glow-orb glow-orb-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-20">
          <span className="section-label mb-4">By the Numbers</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white transition-colors duration-300">
            Results that <span className="gradient-text">speak</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-8 md:p-10 rounded-3xl text-center group glass-card"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, var(--primary-light) 0%, transparent 70%)',
                }}
              />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl bg-white/5 border border-white/10 group-hover:border-primary-light group-hover:bg-purple-500/10 transition-all duration-300">
                <span className="gradient-text">{stat.icon}</span>
              </div>

              {/* Number */}
              <div className="stat-number text-4xl md:text-5xl mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-white font-bold text-base tracking-wide mb-2 transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
