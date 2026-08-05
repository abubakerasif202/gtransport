import { Clock, Moon, PackageSearch, Users, Home, BarChart2, AlertTriangle, Truck, UserCheck } from 'lucide-react';

export const services = [
  {
    id: 'same-day',
    title: 'Same Day and Next Day',
    description: 'Rapid freight solutions ensuring your goods arrive precisely when needed.',
    icon: Clock,
  },
  {
    id: 'after-hours',
    title: 'After-Hours and Weekend',
    description: 'Flexible transport services extending beyond standard business hours.',
    icon: Moon,
  },
  {
    id: 'bulk-freight',
    title: 'Bulk Freight',
    description: 'Handling large-scale cargo and consolidated loads with professional care.',
    icon: PackageSearch,
  },
  {
    id: 'backup-drivers',
    title: 'Back-Up Drivers',
    description: 'Reliable relief personnel to keep your transport operations moving.',
    icon: Users,
  },
  {
    id: 'home-deliveries',
    title: 'Home Deliveries',
    description: 'Direct-to-customer residential freight and delivery coordination.',
    icon: Home,
  },
  {
    id: 'logistics',
    title: 'Logistics Support',
    description: 'Comprehensive transport planning, routing, and supply chain assistance.',
    icon: BarChart2,
  },
  {
    id: 'dangerous-goods',
    title: 'Dangerous Goods Support',
    description: 'Dangerous goods support with the necessary operational requirements and insurance, subject to job assessment.',
    icon: AlertTriangle,
  },
  {
    id: 'linehaul',
    title: 'Local, Linehaul, and Interstate Transport',
    description: 'Dependable long-distance transport connecting major Australian cities.',
    icon: Truck,
  },
  {
    id: 'white-label',
    title: 'White-Label / Ghost-Driver Services',
    description: 'Drivers can be uniformed to represent your business at the customer-facing stage of delivery.',
    icon: UserCheck,
  }
];
