import { Helmet } from 'react-helmet-async';
import { CoverageMap } from '../components/sections/CoverageMap';
import { CtaBanner } from '../components/sections/CtaBanner';

export default function ServiceAreasPage() {
  return (
    <>
      <Helmet>
        <title>Service Areas | 1st Class Express</title>
        <meta name="description" content="View the 1st Class Express delivery network covering Sydney, Brisbane, Melbourne, Adelaide, Perth, and regional NSW locations." />
      </Helmet>
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black" />
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop" alt="Australia Map Concept" className="w-full h-full object-cover mix-blend-luminosity" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans uppercase tracking-tight text-white mb-6">Service Areas</h1>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-gold"></div>
          </div>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From metropolitan capitals to regional hubs, our network ensures reliable freight delivery.
          </p>
        </div>
      </section>

      <CoverageMap />
      <CtaBanner />
    </>
  );
}
