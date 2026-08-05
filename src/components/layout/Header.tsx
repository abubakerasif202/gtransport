import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../common/Button';
import { cn } from '../../lib/utils';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/our-services' },
  { name: 'Fleet', path: '/our-fleet' },
  { name: 'Service Areas', path: '/service-areas' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-400 ease-premium border-b',
          isScrolled 
            ? 'bg-brand-black border-border/20 py-2 shadow-lg' 
            : 'bg-transparent border-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 relative z-10 flex items-center" aria-label="1st Class Express Home">
            <img 
              src="/brand/logo-light.svg" 
              alt="1st Class Express Logo" 
              className={cn(
                "h-auto transition-all duration-400 ease-premium",
                isScrolled ? "w-40 sm:w-48" : "w-48 sm:w-56"
              )} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'text-sm font-semibold tracking-wide uppercase transition-premium',
                        isActive
                          ? 'text-brand-red border-b-2 border-brand-red pb-1'
                          : 'text-text-primary hover:text-brand-gold'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-border/30 pl-6 xl:pl-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-brand-gold hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>

            <Button asChild variant="primary">
              <Link to="/book-now">Request a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-text-primary hover:text-brand-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navLinks={navLinks} socialLinks={socialLinks} />
    </>
  );
}
