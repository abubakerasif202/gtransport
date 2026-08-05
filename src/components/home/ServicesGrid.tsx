import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Snowflake, Package, Shield, Zap, Anchor } from 'lucide-react';
import { motion } from 'motion/react';
import { BlurImage } from '../common/BlurImage';

const coreServices = [
  {
    id: 'express',
    title: 'Express Delivery',
    shortDescription: 'Time-critical logistics for urgent shipments.',
    fullDescription: 'Our express services guarantee priority handling and rapid transit times, ensuring your time-critical freight arrives safely and on schedule, Australia-wide.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'heavy-haulage',
    title: 'Heavy Haulage',
    shortDescription: 'Specialized transport for oversized cargo.',
    fullDescription: 'Equipped with heavy-duty vehicles and specialized permits, we manage the safe and compliant transportation of oversized, heavy, and awkward loads.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'cold-chain',
    title: 'Cold Chain',
    shortDescription: 'Temperature-controlled transport solutions.',
    fullDescription: 'Maintain product integrity with our state-of-the-art refrigerated transport fleet, providing uninterrupted temperature control from pickup to final delivery.',
    icon: Snowflake,
    image: 'https://images.unsplash.com/photo-1605273183577-fb1c8cc9300f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'linehaul',
    title: 'Linehaul Transport',
    shortDescription: 'Interstate and long-distance freight.',
    fullDescription: 'Dependable long-distance transport connecting major Australian cities with scheduled runs, optimized routing, and consistent communication.',
    icon: Anchor,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2074&auto=format&fit=crop',
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    shortDescription: 'Secure storage and distribution.',
    fullDescription: 'Comprehensive warehousing solutions including secure storage, cross-docking, pick-and-pack services, and seamless inventory management.',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'secure-freight',
    title: 'Secure Freight',
    shortDescription: 'High-value and sensitive cargo handling.',
    fullDescription: 'Specialized handling and enhanced security protocols for high-value, fragile, or sensitive goods requiring ultimate care and discretion.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2054&auto=format&fit=crop',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center">
              <span className="mr-2 w-8 h-[1px] bg-brand-gold"></span> 
              Core Offerings 
              <span className="ml-2 w-8 h-[1px] bg-brand-gold"></span>
            </h3>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-sans uppercase text-white mb-6 tracking-tight">
              Logistics <span className="text-brand-red">Excellence</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Comprehensive transport and logistics solutions tailored to meet the demands of modern business, from express delivery to specialized heavy haulage.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to="/our-services" 
                className="group block h-full bg-brand-black rounded-sm border border-white/5 hover:border-brand-gold/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100%] transition-transform duration-700 group-hover:scale-[1.5] group-hover:bg-brand-red/10 z-0" />
                
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent z-10" />
                   <BlurImage 
                     src={service.image} 
                     alt={service.title}
                     wrapperClassName="absolute inset-0"
                     className="group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-6 left-6 z-20 w-14 h-14 bg-brand-charcoal/90 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-brand-gold/50 group-hover:bg-brand-gold/10 transition-colors duration-500 rounded-sm">
                    <service.icon className="h-7 w-7 text-brand-red group-hover:text-brand-gold transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full p-8 pt-4">
                  <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed font-medium">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Detail Section */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-text-primary text-sm leading-relaxed pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.fullDescription}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex items-center text-brand-gold text-xs font-bold tracking-[0.15em] uppercase group-hover:text-brand-red transition-colors duration-300">
                    Explore Service
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
