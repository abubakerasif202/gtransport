export function ProcessSteps() {
  const steps = [
    { title: 'Tell Us What You Need', description: 'Provide your freight dimensions, pickup, and delivery details.' },
    { title: 'Receive a Tailored Quote', description: 'We calculate the most efficient and cost-effective transport solution.' },
    { title: 'Confirm Your Booking', description: 'Secure your scheduled transport with our operations team.' },
    { title: 'We Move Your Freight', description: 'Our experienced drivers handle the linehaul and final delivery.' }
  ];

  return (
    <section className="py-24 bg-brand-charcoal border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center justify-center">
            <span className="mr-2">—</span> Simple Process <span className="ml-2">—</span>
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold font-sans uppercase tracking-tight text-white mb-6">How It Works</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-black border-2 border-brand-red flex items-center justify-center text-2xl font-bold font-sans text-brand-gold mb-6 relative z-10">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold font-sans uppercase tracking-wide text-white mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
