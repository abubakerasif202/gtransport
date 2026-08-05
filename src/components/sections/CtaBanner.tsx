import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { company } from '../../data/company';

export function CtaBanner() {
  return (
    <section className="relative py-24 bg-brand-black overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2940&auto=format&fit=crop" 
          alt="Transport" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h4 className="text-brand-gold text-[10px] uppercase tracking-widest mb-4">Our Guarantee</h4>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-text-secondary mb-10 leading-relaxed border-l-2 border-brand-gold/30 pl-6">
             "Let Us Do What We Do Best, To Free Up Your Time For What You Do Best."
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="primary" size="lg">
              <Link to="/book-now">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-brand-black/50">
              <a href={`tel:${company.phonePrimary.replace(/\s+/g, '')}`}>Call {company.phonePrimary}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
