import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, ShieldCheck, Pause, Play } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
    filter: 'blur(4px)',
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
    filter: 'blur(4px)',
  }),
};

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Subtle Background Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center">
            <span className="mr-2 w-8 h-[1px] bg-brand-gold"></span>
            Client Feedback
            <span className="ml-2 w-8 h-[1px] bg-brand-gold"></span>
          </h3>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-sans uppercase text-white mb-6 tracking-tight">
            Trusted By <span className="text-brand-red">Industry Leaders</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Discover why national enterprises and commercial partners rely on 1st Class Express for precision linehaul, express freight, and dedicated transport solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="relative min-h-[380px] bg-brand-black p-8 sm:p-12 rounded-sm border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
            {/* Watermark Quote Icon */}
            <Quote className="absolute top-6 right-6 w-32 h-32 text-brand-gold/5 -rotate-12 pointer-events-none" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full justify-between relative z-10 space-y-8"
              >
                {/* Header Meta: Route badge, Verified badge, Rating */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {currentTestimonial.route && (
                      <span className="bg-brand-red/10 text-brand-red border border-brand-red/20 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-sm">
                        {currentTestimonial.route}
                      </span>
                    )}
                    {currentTestimonial.badge && (
                      <span className="flex items-center gap-1 text-xs text-text-secondary bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                        {currentTestimonial.badge}
                      </span>
                    )}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>

                {/* Quote Content */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-sans font-normal text-white leading-relaxed italic">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    {/* Monogram Badge */}
                    <div className="w-12 h-12 bg-brand-charcoal border border-brand-gold/40 rounded-sm flex items-center justify-center text-brand-gold font-bold font-sans text-lg shadow-inner">
                      {currentTestimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans uppercase tracking-wider text-base sm:text-lg">
                        {currentTestimonial.author}
                      </h4>
                      <p className="text-brand-gold text-xs sm:text-sm font-medium">
                        {currentTestimonial.role} &mdash; <span className="text-text-primary">{currentTestimonial.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center text-xs text-text-secondary gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    {currentTestimonial.location}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation & Progress Bar Bar below Card */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-2">
            {/* Pagination Indicators / Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-brand-gold'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Controls: Prev, Pause/Play, Next */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-10 h-10 rounded-sm bg-brand-black border border-white/10 hover:border-brand-gold/40 text-text-secondary hover:text-white flex items-center justify-center transition-colors"
                title={isPaused ? "Resume Auto-play" : "Pause Auto-play"}
                aria-label={isPaused ? "Resume Auto-play" : "Pause Auto-play"}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>

              <button
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-sm bg-brand-black border border-white/10 hover:border-brand-gold/40 text-white flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-sm bg-brand-black border border-white/10 hover:border-brand-gold/40 text-white flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
