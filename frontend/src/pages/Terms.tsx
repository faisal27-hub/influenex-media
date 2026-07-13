import { useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using the Influnex Media website (influnexmedia.com) and our services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services.`,
  },
  {
    title: 'Services Provided',
    content: `Influnex Media provides influencer marketing services including but not limited to: campaign strategy, creator sourcing and vetting, brand-creator matching, campaign management, UGC production, performance reporting, and creator management. The specific scope of services for each engagement is defined in a separate written agreement between Influnex Media and the client.`,
  },
  {
    title: 'Client Obligations',
    content: `As a client, you agree to: provide accurate information about your brand, products, and campaign goals; review and approve campaign briefs in a timely manner; provide necessary assets (logos, product images, brand guidelines) as required; comply with applicable advertising standards and disclosure regulations; make payments as agreed in your service agreement; maintain confidentiality of any proprietary information shared by Influnex Media.`,
  },
  {
    title: 'Creator Obligations',
    content: `Creators working with Influnex Media agree to: create content that accurately represents the client's product or service; comply with platform terms of service and advertising disclosure requirements (#ad, #sponsored); deliver content within agreed timelines; not create content for competing brands during exclusivity periods as specified in their individual agreements; maintain content quality standards as briefed.`,
  },
  {
    title: 'Payment Terms',
    content: `Payment terms are specified in individual client agreements. Lower tiers require partial upfront payment; late payments may incur interest charges; Influnex Media reserves the right to pause or terminate campaigns for non-payment; all fees are exclusive of applicable taxes unless otherwise stated.`,
  },
  {
    title: 'Intellectual Property',
    content: `Content created by creators for your campaign remains subject to the rights specified in your individual agreement. Generally, clients receive a license to use campaign content for agreed-upon purposes and timeframes. Influnex Media retains the right to use anonymized campaign data for portfolio and marketing purposes unless otherwise agreed in writing.`,
  },
  {
    title: 'Limitation of Liability',
    content: `Influnex Media's liability is limited to the fees paid for the specific service in question. We are not liable for: creator content that fails to meet performance expectations; platform algorithm changes affecting campaign reach; force majeure events; indirect, consequential, or punitive damages. We make no guarantees about specific campaign outcomes, as influencer marketing results depend on many factors outside our control.`,
  },
  {
    title: 'Confidentiality',
    content: `Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This includes campaign strategies, creator rates, client product information, and business data. NDAs are available upon request and are standard in our enterprise agreements.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms & Conditions are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the jurisdiction of courts in India. We encourage resolving disputes amicably before pursuing legal action.`,
  },
  {
    title: 'Contact Us',
    content: `For questions about these Terms & Conditions, please contact us:\n\nEmail: influnexmedia.in@gmail.com\n\nWe aim to respond to all legal inquiries within 48 business hours.`,
  },
];

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions — Influnex Media';
  }, []);

  return (
    <main className="min-h-screen bg-[#05010f] pt-24 overflow-x-hidden transition-colors duration-300">
      {/* Hero */}
      <section className="relative py-16 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="glow-orb glow-orb-cyan w-[400px] h-[200px] top-0 left-1/2 -translate-x-1/2 opacity-10" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-6">Legal</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 font-extrabold">Terms & Conditions</h1>
            <p className="text-slate-400">Last updated: July 2026</p>
            <p className="text-slate-300 mt-4 leading-relaxed">
              These Terms & Conditions govern your use of Influnex Media's website and services. Please read them carefully before engaging with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card p-8 border border-white/5"
            >
              <h2 className="font-display font-bold text-white text-xl mb-4">
                <span className="text-accent font-mono text-sm mr-3">{String(i + 1).padStart(2, '0')}.</span>
                {sec.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{sec.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
