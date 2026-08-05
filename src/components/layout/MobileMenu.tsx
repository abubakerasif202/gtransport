import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';
import { Phone, Mail, LucideIcon } from 'lucide-react';
import { company } from '../../data/company';

interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string }[];
  socialLinks?: SocialLink[];
}

export function MobileMenu({ isOpen, onClose, navLinks, socialLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-brand-charcoal pt-24 px-6 pb-6 overflow-y-auto lg:hidden flex flex-col"
        >
          <nav className="flex-1">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'text-lg font-bold font-sans tracking-[0.2em] uppercase block transition-colors',
                        isActive ? 'text-brand-gold' : 'text-text-primary hover:text-brand-gold'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-12 flex flex-col gap-6 border-t border-border/20 pt-8">
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-6 pb-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-brand-gold hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            )}
            
            <Button asChild variant="primary" className="w-full" size="lg">
              <Link to="/book-now">Request a Quote</Link>
            </Button>
            
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href={`tel:${company.phonePrimary.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-text-secondary hover:text-brand-gold transition-colors">
                <Phone className="h-5 w-5 text-brand-red" />
                {company.phonePrimary}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-text-secondary hover:text-brand-gold transition-colors">
                <Mail className="h-5 w-5 text-brand-red" />
                {company.email}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
