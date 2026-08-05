import { Helmet } from 'react-helmet-async';
import { QuoteForm } from '../components/forms/QuoteForm';

export default function BookNowPage() {
  return (
    <>
      <Helmet>
        <title>Request a Quote | 1st Class Express</title>
        <meta name="description" content="Request a freight transport quote from 1st Class Express. Provide your delivery details for a tailored interstate or linehaul transport solution." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
          <img src="https://images.unsplash.com/photo-1586864387789-228f090ceb68?q=80&w=2940&auto=format&fit=crop" alt="Logistics" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans uppercase tracking-tight text-white mb-6">Request a Quote</h1>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-gold"></div>
          </div>
          <p className="text-xl text-text-secondary max-w-2xl">
            Provide the details of your freight requirements below, and our operations team will provide a tailored, competitive transport solution.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-surface border-y border-border/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-black p-6 sm:p-10 rounded-sm border border-border/10 shadow-2xl">
            <h2 className="text-2xl font-bold font-sans uppercase tracking-wide text-brand-gold mb-8 pb-4 border-b border-border/20">Booking Details</h2>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
