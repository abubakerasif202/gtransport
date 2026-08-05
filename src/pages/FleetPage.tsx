import { Helmet } from 'react-helmet-async';
import { fleet } from '../data/fleet';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function FleetPage() {
  return (
    <>
      <Helmet>
        <title>Our Fleet | 1st Class Express</title>
        <meta name="description" content="Explore the 1st Class Express fleet. From 1-tonne vans for quick local deliveries to prime movers for interstate linehaul." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
          <img src="https://images.unsplash.com/photo-1610423011382-7c5e25265487?q=80&w=2946&auto=format&fit=crop" alt="Transport Fleet" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans uppercase tracking-tight text-white mb-6">Our Fleet</h1>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-gold"></div>
          </div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
            Our vehicles range from 1-tonne vans to pallet trucks, sizing up to semi-trailers and B-doubles.
          </p>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {fleet.map((item, index) => (
            <div key={index} className={`flex flex-col gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border/20 shadow-2xl">
                  <img src={item.image} alt={item.category} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold font-sans uppercase tracking-wide text-white">{item.category}</h3>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:px-12">
                <h3 className="text-3xl font-bold font-sans uppercase tracking-wide text-brand-gold mb-6">{item.category} Types</h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="space-y-4 mb-10">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Vehicle Capabilities</h4>
                  <ul className="space-y-3">
                    {item.vehicles.map((v, i) => (
                      <li key={i} className="flex items-center gap-3 text-text-secondary">
                        <div className="w-2 h-2 rounded-full bg-brand-red" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="primary">
                  <Link to="/book-now">Request this Vehicle Type</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
