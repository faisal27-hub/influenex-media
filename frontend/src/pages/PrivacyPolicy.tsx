import { useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Information We Collect',
    content: `When you fill out our contact form or collaboration brief, we collect: your name, company name, email address, phone number (optional), website URL (optional), campaign goals, budget range, and message content. We may also collect anonymous analytics data such as page views and session duration through standard web analytics tools.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information you provide to: respond to your campaign inquiry, prepare custom proposals, communicate about our services, and improve our website experience. We do not sell, rent, or trade your personal information to third parties. We only use your data for the purpose you provided it.`,
  },
  {
    title: 'Data Storage & Security',
    content: `All form submissions are stored securely in our database with industry-standard encryption. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Our servers are located in secure data centers.`,
  },
  {
    title: 'Third-Party Services',
    content: `Our website may use third-party services such as analytics providers. These services may collect anonymous usage data in accordance with their own privacy policies. We do not share your personally identifiable information with these third parties. Creator profile images displayed on our website are sourced from publicly available social media profiles.`,
  },
  {
    title: 'Cookies',
    content: `We may use essential cookies to maintain website functionality. We do not use tracking cookies for advertising purposes. You can disable cookies in your browser settings, though this may affect some website features.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to: request access to the personal data we hold about you, request correction of inaccurate data, request deletion of your data, withdraw consent at any time. To exercise any of these rights, please contact us at the email address below.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last Updated" date at the top of this page. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:\n\nEmail: influnexmedia.in@gmail.com\n\nWe aim to respond to all privacy-related inquiries within 48 hours.`,
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy — Influnex Media';
  }, []);

  return (
    <main className="min-h-screen bg-[#05010f] pt-24 overflow-x-hidden transition-colors duration-300">
      {/* Hero */}
      <section className="relative py-16 border-b border-white/5">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="glow-orb glow-orb-blue w-[400px] h-[200px] top-0 left-1/2 -translate-x-1/2 opacity-10" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-6">Legal</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-400">Last updated: July 2026</p>
            <p className="text-slate-300 mt-4 leading-relaxed">
              At Influnex Media, we take your privacy seriously. This policy explains what information we collect, how we use it, and what rights you have.
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
              <h2 className="font-display font-bold text-white text-xl mb-4">{sec.title}</h2>
              <p className="text-slate-355 text-slate-300 text-sm leading-relaxed whitespace-pre-line">{sec.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
