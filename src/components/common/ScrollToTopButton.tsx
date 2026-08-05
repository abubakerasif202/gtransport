import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down past the hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/20 transition-all duration-300 hover:bg-brand-gold-light hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
}
