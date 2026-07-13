import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We start with your brand, goals, target audience, and budget. A thorough discovery session to understand what success looks like for you.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We design a custom campaign strategy — platforms, creator tiers, content formats, timelines, and measurable KPIs aligned to your funnel.',
    icon: '🗺️',
  },
  {
    number: '03',
    title: 'Creator Selection',
    desc: 'We shortlist and vet creators specifically for your campaign. Every creator clears our quality checks before going into your brief.',
    icon: '✅',
  },
  {
    number: '04',
    title: 'Campaign Execution',
    desc: 'Contracts, briefings, content reviews, approvals, posting, and compliance — all handled seamlessly from brief to publish.',
    icon: '🚀',
  },
  {
    number: '05',
    title: 'Performance Report',
    desc: 'After the campaign, you get a comprehensive report with real funnel metrics — reach, engagement, traffic, conversions, and ROI.',
    icon: '📊',
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01] transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4">Our Process</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 transition-colors duration-300">
            How we <span className="gradient-text">work</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto transition-colors duration-300">
            A proven 5-step process that takes your campaign from idea to measurable impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Desktop: Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <div className="glass-card p-6 inline-block w-full group hover:border-purple-500/20 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3 justify-start md:justify-end group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-2xl">{step.icon}</span>
                      <span className="font-mono text-accent text-xs tracking-widest font-semibold">{step.number}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl mb-2 transition-colors duration-300">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed transition-colors duration-300">{step.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex-shrink-0 z-10">
                  <div className="w-5 h-5 rounded-full border-2 border-accent bg-[#05010f] relative">
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500" />
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-purple-500/20 scale-[2.5] animate-ping opacity-20" />
                </div>

                {/* Desktop spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
