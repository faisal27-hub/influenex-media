import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

// ── BackToTop Button ────────────────────────────────────────────
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            boxShadow: '0 4px 20px rgba(232,28,255,0.3)',
          }}
          aria-label="Back to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp size={20} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ── Loading Screen ──────────────────────────────────────────────
export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="loading-screen"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3.5 select-none">
              <img
                src="/favicon.svg"
                alt="Influnex Media Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Influnex <span className="gradient-text">Media</span>
              </span>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-48 h-0.5 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent))' }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-xs font-mono tracking-widest mt-4 uppercase"
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Cursor Glow ─────────────────────────────────────────────────
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      className="cursor-glow pointer-events-none"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}

// ── Page Transition Wrapper ─────────────────────────────────────
export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
