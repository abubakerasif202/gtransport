import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { company } from '../../data/company';

export function AboutIntro() {
  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-gold"></div>
              <span className="text-brand-gold font-semibold text-xs tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-sans uppercase tracking-tight text-white mb-8 leading-tight">
              Backed by <span className="text-brand-gold">Experience</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {company.about}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-10 font-medium">
              We are an {company.ownership.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="gold" size="lg">
                <Link to="/about-us">About 1st Class Express</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Speak With Our Team</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold/10 -translate-x-4 translate-y-4 rounded-sm" />
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2946&auto=format&fit=crop" 
              alt="Transport Professionals" 
              className="relative z-10 w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
