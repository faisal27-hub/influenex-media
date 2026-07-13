import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Creators', href: '/creators' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#05010f]/60 backdrop-blur-xl border-b border-white/[0.04] shadow-lg'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center group select-none">
              <img
                src="/logo.png"
                alt="Influnex Media Logo"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:opacity-90"
              />
            </Link>
          </div>

          {/* Desktop Nav Links (Perfectly Centered) */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Spacer Column (Desktop) & Mobile Hamburger Column */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white border border-white/10 bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-0 top-0 z-40 pt-24 pb-8 px-6 bg-[#05010f]/95 backdrop-blur-xl border-b border-white/5 shadow-lg"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.href}
                      className={`block px-5 py-4 rounded-2xl text-lg font-medium transition-all ${
                        isActive
                          ? 'bg-white/5 text-accent border border-white/10 font-semibold'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
