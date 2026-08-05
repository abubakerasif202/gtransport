import { Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../../data/company';

export function AnnouncementBar() {
  return (
    <div className="bg-brand-charcoal text-text-secondary py-2 px-4 text-xs font-medium border-b border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <Mail className="h-3.5 w-3.5 text-brand-red" />
            <span className="hidden sm:inline">{company.email}</span>
          </a>
          <a href={`tel:${company.phonePrimary.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
            <Phone className="h-3.5 w-3.5 text-brand-red" />
            <span>{company.phonePrimary}</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-brand-red hidden sm:block" />
          <span className="hidden sm:inline uppercase tracking-wider text-[10px]">Sydney • Brisbane • Melbourne • Adelaide</span>
        </div>
      </div>
    </div>
  );
}
