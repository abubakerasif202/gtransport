export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  route?: string;
  badge?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: '1st Class Express has completely transformed our Melbourne to Sydney linehaul reliability. Urgent shipments that used to cause operational headaches are now handled seamlessly with real-time updates and zero delays.',
    author: 'Marcus Vance',
    role: 'Head of National Logistics',
    company: 'Apex Industrial Supplies',
    location: 'Melbourne, VIC',
    rating: 5,
    route: 'MEL ➔ SYD Linehaul',
    badge: 'Verified Client',
  },
  {
    id: '2',
    quote: 'Their white-label ghost driver service is an absolute game changer. Our customers receive top-tier, uniformed delivery representatives who seamlessly extend our own brand identity.',
    author: 'Sarah Jenkins',
    role: 'Operations Director',
    company: 'Pacific Medical Gear',
    location: 'Brisbane, QLD',
    rating: 5,
    route: 'BNE Express Delivery',
    badge: 'Verified Partner',
  },
  {
    id: '3',
    quote: 'When we needed emergency cold-chain transport for temperature-sensitive goods across state lines, 1st Class Express delivered flawlessly. Total peace of mind from dispatch to arrival.',
    author: 'David Chen',
    role: 'Supply Chain Manager',
    company: 'BioPharma Australia',
    location: 'Sydney, NSW',
    rating: 5,
    route: 'SYD ➔ ADL Cold Chain',
    badge: 'Verified Client',
  },
  {
    id: '4',
    quote: 'After-hours and weekend freight support is hard to come by with traditional carriers. The team at 1st Class Express is responsive 24/7, keeping our production lines running non-stop.',
    author: 'Elena Rostova',
    role: 'Plant Logistics Lead',
    company: 'Southern Steel Works',
    location: 'Adelaide, SA',
    rating: 5,
    route: 'Interstate Bulk Freight',
    badge: 'Verified Client',
  },
  {
    id: '5',
    quote: 'Extremely professional driver relief team. When two of our main linehaul drivers went down, 1st Class Express stepped in within 2 hours with backup drivers and zero operational downtime.',
    author: 'Tom Gallagher',
    role: 'General Manager',
    company: 'TransAus Heavy Haulage',
    location: 'Perth, WA',
    rating: 5,
    route: 'Driver Relief & Back-Up',
    badge: 'Verified Partner',
  }
];
