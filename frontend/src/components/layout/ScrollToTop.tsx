import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Instant reset to top on route change to avoid scroll-restoration center jump
    });
  }, [pathname]);

  return null;
}
