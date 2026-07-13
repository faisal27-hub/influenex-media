import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/layout/ScrollToTop';
import Footer from './components/layout/Footer';
import {
  BackToTop,
  LoadingScreen,
  CursorGlow,
} from './components/ui/UIComponents';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Creators from './pages/Creators';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
