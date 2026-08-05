import { CheckCircle2 } from 'lucide-react';

const reasons = [
  { title: 'Committed Service', description: 'Dedicated to delivering on our promises with consistency and care.' },
  { title: 'Quality & Reliability', description: 'Stringent operational standards ensuring your freight is handled professionally.' },
  { title: 'Peace of Mind', description: 'End-to-end tracking and clear communication throughout the transit process.' },
  { title: 'Australian Owned', description: 'Proudly supporting local businesses with nationwide logistics capabilities.' },
  { title: 'Experienced Team', description: 'Skilled operators, drivers, and logistics coordinators with years of industry knowledge.' },
  { title: 'Competitive Solutions', description: 'Tailored pricing models designed to provide maximum value for your transport budget.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-4">
            The 1st Class Advantage
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold font-sans uppercase text-white mb-6">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <CheckCircle2 className="h-8 w-8 text-brand-red shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-white mb-2">{reason.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
