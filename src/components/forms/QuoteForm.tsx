import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../common/Button';

const quoteSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  companyName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number is required'),
  pickupSuburb: z.string().min(2, 'Pickup suburb is required'),
  deliverySuburb: z.string().min(2, 'Delivery suburb is required'),
  pickupDate: z.string().min(1, 'Preferred date is required'),
  serviceType: z.string().min(1, 'Service type is required'),
  freightDescription: z.string().min(10, 'Please provide more details about the freight'),
  quantity: z.string().min(1, 'Quantity is required'),
  urgency: z.string().min(1, 'Urgency is required'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms.",
  }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form Submitted', data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-charcoal border border-brand-gold/30 p-8 rounded-sm text-center">
        <h3 className="text-2xl font-bold font-sans uppercase tracking-wide text-brand-gold mb-4">Request Received</h3>
        <p className="text-text-secondary leading-relaxed mb-6">
          Thank you for your enquiry. Our operations team will review your requirements and contact you shortly with a tailored quote.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">First Name *</label>
          <input {...register('firstName')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
          {errors.firstName && <p className="text-brand-red text-xs">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Last Name *</label>
          <input {...register('lastName')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
          {errors.lastName && <p className="text-brand-red text-xs">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Company Name</label>
          <input {...register('companyName')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Email *</label>
          <input type="email" {...register('email')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
          {errors.email && <p className="text-brand-red text-xs">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Phone *</label>
          <input type="tel" {...register('phone')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
          {errors.phone && <p className="text-brand-red text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Pickup Suburb/Postcode *</label>
          <input {...register('pickupSuburb')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
          {errors.pickupSuburb && <p className="text-brand-red text-xs">{errors.pickupSuburb.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Delivery Suburb/Postcode *</label>
          <input {...register('deliverySuburb')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
          {errors.deliverySuburb && <p className="text-brand-red text-xs">{errors.deliverySuburb.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Preferred Date *</label>
          <input type="date" {...register('pickupDate')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold [color-scheme:dark]" />
          {errors.pickupDate && <p className="text-brand-red text-xs">{errors.pickupDate.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Service Type *</label>
          <select {...register('serviceType')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold appearance-none">
            <option value="">Select Service</option>
            <option value="Same Day">Same Day</option>
            <option value="Next Day">Next Day</option>
            <option value="Interstate Linehaul">Interstate Linehaul</option>
            <option value="Bulk Freight">Bulk Freight</option>
            <option value="Dangerous Goods">Dangerous Goods</option>
          </select>
          {errors.serviceType && <p className="text-brand-red text-xs">{errors.serviceType.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Urgency *</label>
          <select {...register('urgency')} className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold appearance-none">
            <option value="">Select Urgency</option>
            <option value="Standard">Standard</option>
            <option value="Urgent">Urgent</option>
            <option value="After Hours">After Hours</option>
          </select>
          {errors.urgency && <p className="text-brand-red text-xs">{errors.urgency.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Freight Description *</label>
          <textarea {...register('freightDescription')} rows={3} placeholder="Describe the goods being transported" className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold resize-none" />
          {errors.freightDescription && <p className="text-brand-red text-xs">{errors.freightDescription.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Special Instructions</label>
          <textarea {...register('message')} rows={3} placeholder="Any specific requirements (e.g. tail lift required, site induction)" className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold resize-none" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Items / Quantity / Dimensions *</label>
        <input {...register('quantity')} placeholder="e.g. 2 Pallets, 500kg" className="w-full bg-brand-charcoal border border-border/20 rounded-sm px-4 py-2.5 text-white focus:outline-none focus:border-brand-gold" />
        {errors.quantity && <p className="text-brand-red text-xs">{errors.quantity.message}</p>}
      </div>

      <div className="flex items-start gap-3 pt-4">
        <input type="checkbox" id="consent" {...register('consent')} className="mt-1 h-4 w-4 bg-brand-charcoal border-border/20 rounded-sm text-brand-red focus:ring-brand-gold" />
        <div className="space-y-1">
          <label htmlFor="consent" className="text-sm text-text-secondary block">
            I understand this is a booking request and does not guarantee acceptance until confirmed by the transport team.
          </label>
          {errors.consent && <p className="text-brand-red text-xs">{errors.consent.message}</p>}
        </div>
      </div>

      <div className="pt-6 border-t border-border/10">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? 'Submitting Request...' : 'Submit Booking Request'}
        </Button>
      </div>
    </form>
  );
}
