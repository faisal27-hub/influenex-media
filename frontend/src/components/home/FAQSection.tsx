import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Do you only work with tech brands?',
    answer: 'While our primary expertise is in SaaS, developer tools, fintech, AI, and consumer tech, we also partner with high-growth lifestyle, productivity, and web3 brands that require our analytical, performance-driven approach.',
  },
  {
    question: 'How do you ensure creator authenticity?',
    answer: 'We perform deep vetting on every creator in our network. This includes analyzing audience demographics, auditing engagement metrics to filter out bots, evaluating alignment with brand values, and reviewing historical content quality.',
  },
  {
    question: 'What sizes of creators are in your network?',
    answer: 'Our network spans micro-creators (10k-50k followers) who offer deep niche engagement, up to top-tier developer advocates and key opinion leaders (500k+ followers) capable of driving massive brand awareness.',
  },
  {
    question: 'How long does it take to launch a campaign?',
    answer: 'Most campaigns take 3 to 4 weeks to launch. This timeline covers creator sourcing, contract negotiations, content co-creation, brand review, and final scheduling.',
  },
  {
    question: 'Do you handle contract legalities and compliance?',
    answer: 'Absolutely. We manage end-to-end operational workflows, including drafting customized contracts, securing usage rights for ad repurposing, and processing prompt creator payouts.',
  },
  {
    question: 'How is campaign ROI measured and tracked?',
    answer: 'We optimize for business outcomes, not vanity metrics. We provide real-time dashboard tracking on conversion rates, cost-per-acquisition (CPA), site traffic, signups, and customer acquisition costs.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#05010f] overflow-hidden transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="glow-orb glow-orb-purple w-[600px] h-[300px] top-1/4 -left-20 opacity-10 pointer-events-none" />
      <div className="glow-orb glow-orb-cyan w-[500px] h-[250px] bottom-1/4 -right-20 opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-4 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Everything you need to know about our influencer networks, processes, and campaign operations.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`group rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-purple-500/20 bg-purple-500/[0.02] shadow-[0_0_20px_rgba(147,51,234,0.05)]'
                    : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-white text-sm sm:text-base tracking-wide transition-colors duration-300 group-hover:text-slate-200">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'border-purple-500/30 bg-purple-500/10 text-accent' 
                      : 'border-white/10 text-slate-400 group-hover:border-white/20 group-hover:text-white'
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed max-w-3xl border-t border-white/5 mt-1 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
