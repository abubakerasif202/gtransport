import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { company } from '../../data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-text-secondary border-t border-border/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="inline-block transition-opacity hover:opacity-90" aria-label="1st Class Express Home">
              <img 
                src="/brand/logo-light.svg" 
                alt="1st Class Express Logo" 
                className="h-12 sm:h-14 w-auto" 
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              {company.description}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-surface-raised flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-sans text-sm uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about-us" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/our-services" className="hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/our-fleet" className="hover:text-brand-gold transition-colors">Our Fleet</Link></li>
              <li><Link to="/book-now" className="hover:text-brand-gold transition-colors">Book Now</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold font-sans text-sm uppercase tracking-[0.2em] mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-brand-red shrink-0" />
                <div>
                  <a href={`tel:${company.phonePrimary.replace(/\s+/g, '')}`} className="block hover:text-brand-gold transition-colors">{company.phonePrimary}</a>
                  <a href={`tel:${company.phoneSecondary.replace(/\s+/g, '')}`} className="block hover:text-brand-gold transition-colors mt-1">{company.phoneSecondary}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-brand-red shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-brand-gold transition-colors break-all">{company.email}</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold font-sans text-sm uppercase tracking-[0.2em] mb-6">Main Locations</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                Sydney, NSW
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                Brisbane, QLD
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                Melbourne, VIC
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                Adelaide, SA
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                Perth, WA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
