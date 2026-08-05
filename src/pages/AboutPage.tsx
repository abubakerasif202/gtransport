import { Helmet } from 'react-helmet-async';
import { company } from '../data/company';
import { CtaBanner } from '../components/sections/CtaBanner';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | 1st Class Express</title>
        <meta name="description" content="Learn about 1st Class Express, an Australian privately owned transport company providing local, linehaul, and interstate freight solutions." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
          <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2946&auto=format&fit=crop" alt="Transport Fleet" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans uppercase tracking-tight text-white mb-6">About Us</h1>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-gold"></div>
          </div>
          <p className="text-xl text-text-secondary max-w-2xl">
            A trusted Australian privately owned transport company, delivering excellence across the nation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-sans uppercase tracking-wide text-white leading-tight">
                Our Story and <span className="text-brand-gold">Commitment</span>
              </h2>
              <div className="prose prose-invert prose-lg text-text-secondary">
                <p>
                  Backed by industry professionals, 1st Class Express offers local, linehaul, and interstate transport services throughout Australia. Our team brings recognised Asia-Pacific transport and logistics experience to every freight movement.
                </p>
                <p>
                  As an <strong>{company.ownership.toLowerCase()}</strong>, we understand the unique demands of the national supply chain. We prioritize safety, clear communication, and the careful handling of your goods, ensuring that your freight reaches its destination efficiently and securely.
                </p>
                <p>
                  Whether it is an urgent same-day delivery across the city or a complex linehaul requirement across the country, our modern fleet and experienced drivers are equipped to manage your logistics with precision.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop" alt="Truck driving" className="rounded-sm w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1566371486490-560ded23b5e4?q=80&w=1000&auto=format&fit=crop" alt="Loading freight" className="rounded-sm w-full h-48 object-cover" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Warehouse logistics" className="rounded-sm w-full h-48 object-cover" />
                <img src="https://images.unsplash.com/photo-1610423011382-7c5e25265487?q=80&w=1000&auto=format&fit=crop" alt="Heavy vehicle transport" className="rounded-sm w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CtaBanner />
    </>
  );
}
