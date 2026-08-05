import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export function FinalCta() {
  return (
    <section className="py-24 bg-brand-charcoal border-t border-border/20 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-bl-[100%] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-tr-[100%] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] mb-4">Ready to move</h3>
        <h2 className="text-4xl sm:text-5xl font-bold font-sans uppercase tracking-tight text-white mb-6">A-Z Great Peace of Mind</h2>
        <p className="text-xl text-text-secondary mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
          No worries. No hassles. No panic. Delivery at your doorstep.
        </p>
        <Button asChild variant="primary" size="lg">
          <Link to="/book-now">Get a Free Quote</Link>
        </Button>
      </div>
    </section>
  );
}
