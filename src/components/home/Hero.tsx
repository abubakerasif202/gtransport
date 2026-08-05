import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../common/Button';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex items-center bg-brand-black overflow-hidden">
      {/* Cinematic Background Image Overlay */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full"
      >
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50 z-10" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-12 h-[2px] bg-brand-gold"></div>
              <span className="text-brand-gold font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
                Australia-Wide Freight Solutions
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-sans uppercase leading-[1] tracking-tighter text-white">
              Moving Your <br/>
              <span className="text-brand-gold relative">
                Freight
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-red"></span>
              </span> Interstate
            </h1>
            
            <p className="text-xl sm:text-2xl text-text-primary font-medium">
              Reliable linehaul and interstate transport services across Australia.
            </p>
            
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
              Backed by experienced transport professionals, 1st Class Express provides dependable local, linehaul and interstate freight solutions with a strong focus on safety, communication and customer service.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button asChild variant="primary" size="lg" className="px-8 py-4 text-base shadow-lg shadow-brand-red/20">
                <Link to="/book-now">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4 text-base backdrop-blur-sm bg-brand-black/30 border-white/20 hover:bg-white/10 hover:border-white">
                <Link to="/our-services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
