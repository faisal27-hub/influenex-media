import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send, Loader2, ArrowRight, Mail, Clock, Shield, Star, Zap, Users } from 'lucide-react';

interface FormData {
  companyName: string;
  website: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormData = {
  companyName: '',
  website: '',
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

const whyPoints = [
  { icon: CheckCircle, text: 'Verified Creator Network across all categories' },
  { icon: Zap, text: 'Fast response — we reply within 24 hours' },
  { icon: Shield, text: 'Campaigns run on written contracts & NDAs' },
  { icon: Star, text: 'Transparent pricing with no hidden fees' },
  { icon: Users, text: 'Dedicated campaign manager for your brand' },
  { icon: Mail, text: 'Clear communication at every campaign stage' },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    document.title = "Contact Us — Influnex Media";
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError('');

    // Pre-fill backend-required validation fields with generic/inquiry details
    const apiPayload = {
      ...form,
      campaignGoal: 'General Inquiry / Contact Us',
      campaignBudget: 'Let\'s discuss',
      preferredPlatform: 'Multiple Platforms'
    };

    try {
      const rawApiBase = import.meta.env.VITE_API_URL || '';
      const apiBase = rawApiBase.replace(/\/+$/, '');
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiPayload),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.message || 'Failed to submit campaign brief. Please check your network and try again.');
      }
    } catch (err: unknown) {
      console.error('Contact submit error:', err);
      setServerError('Unable to connect to the server. Please check your network connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-5 py-4 rounded-2xl bg-white/5 border text-white text-sm outline-none transition-all duration-300 placeholder-slate-500 ${
      errors[field]
        ? 'border-red-500/50 bg-red-500/5 focus:border-red-500'
        : 'border-white/10 focus:border-accent/50 focus:bg-[#05010f] focus:ring-4 focus:ring-purple-500/5'
    }`;

  return (
    <main className="min-h-screen bg-[#05010f] pt-20 transition-colors duration-300">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="glow-orb glow-orb-blue w-[700px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-15" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="section-label mb-6">Get In Touch</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Tell us about your campaign and we'll connect you with the right creators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

            {/* ── FORM ─────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="glass-card p-8 md:p-10 border border-white/5 space-y-6"
                  >
                    <h2 className="font-display font-bold text-2xl text-white">
                      Campaign Brief
                    </h2>

                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="companyName"
                          value={form.companyName}
                          onChange={handleChange}
                          placeholder="Company Name *"
                          className={inputClass('companyName')}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.companyName}</p>}
                      </div>
                      <div>
                        <input
                          name="website"
                          value={form.website}
                          onChange={handleChange}
                          placeholder="Website (optional)"
                          className={inputClass('website')}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Full Name *"
                          className={inputClass('fullName')}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Email Address *"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number (optional)"
                        className={inputClass('phone')}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your campaign, product, target audience, and details... *"
                        rows={7}
                        className={inputClass('message')}
                        style={{ resize: 'vertical', minHeight: '160px' }}
                      />
                    </div>

                    {/* Server Error */}
                    {serverError && (
                      <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-red-500 text-sm">
                        {serverError}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending your brief...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Campaign Brief
                        </>
                      )}
                    </button>

                    <p className="text-slate-400 text-xs text-center">
                      We respond within 24 hours. All information is kept strictly confidential.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="glass-card p-12 text-center border border-white/5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-white/5 border border-white/10"
                    >
                      <CheckCircle size={40} className="text-accent" />
                    </motion.div>
                    <h2 className="font-display font-bold text-3xl text-white mb-4">
                      Brief Received! 🎉
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      Thank you! Your campaign brief has been submitted successfully. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-sm"
                    >
                      Submit another brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── INFO PANEL ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Why Collaborate */}
              <div className="glass-card p-8 border border-white/5">
                <h3 className="font-display font-bold text-white text-xl mb-6">
                  Why Collaborate With Us
                </h3>
                <div className="space-y-4">
                  {whyPoints.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0 mt-0.5">
                        <Icon size={14} className="text-accent" />
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Contact */}
              <div className="glass-card p-8 border border-white/5">
                <h3 className="font-display font-bold text-white text-base mb-4 flex items-center gap-2">
                  <Mail size={16} className="text-accent" />
                  Direct Contact
                </h3>
                <a
                  href="mailto:influnexmedia.in@gmail.com"
                  className="text-accent hover:text-cyan-400 transition-colors text-sm font-mono break-all font-semibold"
                >
                  influnexmedia.in@gmail.com
                </a>
                <p className="text-slate-400 text-xs mt-2">For urgent inquiries or partnerships</p>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 flex items-center gap-4 border border-white/5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">24-Hour Response</div>
                  <div className="text-slate-400 text-xs">We reply to all briefs within one business day</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="relative py-20 border-t border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="glow-orb glow-orb-blue w-[600px] h-[300px] top-0 left-1/2 -translate-x-1/2 opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-4">
              Your next campaign starts <span className="gradient-text">today.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Don't wait for the perfect moment. The brands winning with creator marketing started with a simple brief.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2"
            >
              Submit Your Brief <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
