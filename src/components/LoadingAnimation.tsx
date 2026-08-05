import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Store completion in sessionStorage
    sessionStorage.setItem('hasSeenIntro', 'true');
    
    // 3 seconds animation duration
    const timer = setTimeout(() => {
      onComplete();
    }, mediaQuery.matches ? 500 : 3000); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black">
      <div className="relative flex flex-col items-center overflow-hidden p-12">
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[400px]"
        >
          <img src="/brand/logo-light.svg" alt="1st Class Express Logo" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>
        
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute -top-20 -bottom-20 w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 blur-xl rotate-[20deg] pointer-events-none"
              initial={{ left: "-100%" }}
              animate={{ left: "200%" }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-20 -bottom-20 w-48 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-40 blur-2xl rotate-[20deg] pointer-events-none"
              initial={{ left: "-100%" }}
              animate={{ left: "200%" }}
              transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
            />
          </>
        )}
      </div>
    </div>
  );
}
