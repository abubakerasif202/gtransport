import { ShieldCheck, Truck, Users, Clock, Anchor, CircleDollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  { label: 'Australian Privately Owned', icon: Anchor },
  { label: 'Interstate Coverage', icon: Truck },
  { label: 'Experienced Drivers', icon: Users },
  { label: 'Flexible Options', icon: Clock },
  { label: 'Safety Focused', icon: ShieldCheck },
  { label: 'Competitive Pricing', icon: CircleDollarSign },
];

export function TrustStrip() {
  return (
    <div className="bg-brand-charcoal w-full border-t border-b border-border/30 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-3 relative"
            >
              <div className="w-12 h-12 rounded-full bg-brand-black/50 border border-white/5 flex items-center justify-center mb-1 group-hover:border-brand-gold/30 transition-colors">
                <item.icon className="h-6 w-6 text-brand-gold opacity-90" strokeWidth={1.5} />
              </div>
              <span className="text-text-secondary font-bold text-[10px] sm:text-xs uppercase tracking-widest leading-tight max-w-[120px]">
                {item.label}
              </span>
              
              {/* Divider line for desktop (except last item) */}
              {index < trustItems.length - 1 && (
                <div className="hidden lg:block absolute right-[-2rem] top-1/2 -translate-y-1/2 w-px h-12 bg-white/5"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
