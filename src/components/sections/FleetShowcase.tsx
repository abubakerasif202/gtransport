import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { fleet } from '../../data/fleet';

export function FleetShowcase() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h3 className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-4">
              Our Vehicles
            </h3>
            <h2 className="text-4xl sm:text-5xl font-bold font-sans uppercase text-white mb-6">A Fleet Ready for Every Delivery</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our vehicles range from 1 tonne vans to pallet trucks, sizing up to semi-trailers and B-double combinations, ensuring we have the right equipment for your specific freight requirements.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link to="/our-fleet">View Full Fleet</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fleet.map((item, index) => (
            <div key={index} className="group flex flex-col bg-surface-raised rounded-sm overflow-hidden border border-border/10 hover:border-brand-gold/30 transition-colors">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-brand-gold mb-4">{item.category}</h3>
                <ul className="mb-6 space-y-2 flex-1">
                  {item.vehicles.map((v, i) => (
                    <li key={i} className="text-white font-medium text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-brand-red rounded-full" />
                      {v}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-text-secondary pt-6 border-t border-border/10">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
