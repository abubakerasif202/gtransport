import { Mail, Phone } from 'lucide-react';
import { company } from '../../data/company';

export function ContactPreview() {
  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold font-sans uppercase tracking-tight text-white mb-6">Get in Touch</h2>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-[2px] bg-brand-gold"></div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-surface p-8 rounded-sm border-l-4 border-brand-red">
                <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-brand-gold mb-4">Customer Service</h3>
                <p className="text-white font-medium mb-1">{company.contactName}</p>
                <p className="text-text-secondary text-sm mb-4">{company.contactRole}</p>
                <a href={`tel:${company.phonePrimary.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-text-primary hover:text-brand-gold transition-colors text-lg">
                  <Phone className="h-5 w-5 text-brand-red" />
                  {company.phonePrimary}
                </a>
              </div>
              
              <div className="bg-surface p-8 rounded-sm border border-border/10">
                <h3 className="text-xl font-bold font-sans uppercase tracking-wide text-white mb-4">Fleet Operations & Support</h3>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-text-secondary hover:text-brand-gold transition-colors break-all">
                  <Mail className="h-5 w-5 text-brand-red shrink-0" />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-raised p-8 sm:p-10 rounded-sm border border-border/10 shadow-xl">
             <h3 className="text-2xl font-bold font-sans uppercase tracking-wide text-white mb-6">Quick Enquiry</h3>
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Please use the Book Now page for full requests in this preview.'); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Name</label>
                    <input type="text" className="w-full bg-brand-black border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" placeholder="Your Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Phone</label>
                    <input type="tel" className="w-full bg-brand-black border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" placeholder="Your Phone Number" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-brand-black border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" placeholder="Your Email Address" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full bg-brand-black border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-red text-white font-semibold uppercase tracking-wide py-3 rounded-sm hover:bg-brand-red-dark transition-colors">
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
}
