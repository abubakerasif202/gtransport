import { Helmet } from 'react-helmet-async';
import { services } from '../data/services';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | 1st Class Express</title>
        <meta name="description" content="Explore our complete range of transport services including same-day delivery, interstate linehaul, bulk freight, and logistics support." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop" alt="Transport Services" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans uppercase tracking-tight text-white mb-6">Our Services</h1>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-gold"></div>
          </div>
          <p className="text-xl text-text-secondary max-w-2xl">
            Flexible, dependable transport solutions tailored to the unique demands of your supply chain and business operations.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-surface border-y border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="group flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-16 h-16 rounded-sm bg-brand-charcoal border border-border/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                    <service.icon className="h-8 w-8 text-brand-red" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-white mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/book-now">Request this Service</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
