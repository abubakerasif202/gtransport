export function DriversCare() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Drivers */}
          <div className="bg-surface p-10 rounded-sm border-t-2 border-brand-red relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-bl-[100%] pointer-events-none" />
            <h3 className="text-2xl font-bold font-sans uppercase tracking-wide text-white mb-6">Our Drivers</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Our drivers are carefully selected, experienced, and professionally presented. We prioritize safe freight handling, reliable routing knowledge, and exceptional customer service on every journey.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Police checks and stringent safety protocols are a standard part of our onboarding process to ensure your cargo is in trusted hands.
            </p>
          </div>

          {/* Customers */}
          <div className="bg-surface p-10 rounded-sm border-t-2 border-brand-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/5 rounded-bl-[100%] pointer-events-none" />
            <h3 className="text-2xl font-bold font-sans uppercase tracking-wide text-white mb-6">Our Customers</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              We support a wide range of businesses across Australia requiring dependable transport, freight, and distribution services. 
            </p>
            <p className="text-text-secondary leading-relaxed">
              We also offer white-label and ghost-driver representation, allowing our operators to seamlessly act as an extension of your own brand during the customer-facing stages of delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
