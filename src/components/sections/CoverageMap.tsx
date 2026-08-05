import { MapPin, Navigation } from 'lucide-react';
import { serviceAreas } from '../../data/serviceAreas';
import { AustraliaMap } from '../common/AustraliaMap';

export function CoverageMap() {
  return (
    <section className="py-24 bg-brand-charcoal border-y border-border/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at center, #d6bd63 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold font-sans uppercase tracking-tight text-white mb-6">Service Areas</h2>
            <div className="w-16 h-1 bg-brand-red mb-8" />
            <p className="text-lg text-text-secondary leading-relaxed mb-12 max-w-lg">
              Operating a comprehensive freight network connecting major Australian capitals and regional hubs with reliable scheduled services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-brand-gold mb-6 flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Interstate Routes
                </h3>
                <ul className="space-y-3">
                  {serviceAreas.interstate.map((area, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-brand-gold mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  NSW Regional
                </h3>
                <ul className="space-y-3">
                  {serviceAreas.nsw.slice(0, 10).map((area, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      {area}
                    </li>
                  ))}
                  <li className="text-text-secondary italic text-sm mt-2 opacity-75">
                    + more locations
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
             <div className="w-full max-w-lg bg-brand-slate/10 rounded-sm border border-brand-gold/10 p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-charcoal via-transparent to-brand-charcoal/20 z-0 pointer-events-none" />
                <AustraliaMap />
                <div className="absolute bottom-6 right-6 z-10 text-right opacity-80 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-brand-gold font-bold uppercase tracking-widest mb-1">Hover regions</p>
                  <p className="text-xs text-text-secondary">Interactive network map</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
