import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../common/Button';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  serviceType: z.string().min(1, 'Please select a service type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const serviceOptions = [
  'Linehaul Transport',
  'Local Distribution',
  'Interstate Freight',
  'Warehousing Solutions',
  'White Label Services',
  'Other',
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      serviceType: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call for future integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-brand-charcoal/80 border border-white/10 text-white rounded-sm px-4 py-3 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors placeholder:text-white/30";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {submitStatus === 'success' ? (
        <div className="bg-green-500/10 border border-green-500/20 rounded-sm p-8 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">Message Sent</h3>
          <p className="text-text-secondary">
            Thank you for reaching out to 1st Class Express. Our team will get back to you shortly.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setSubmitStatus('idle')}
            className="mt-4"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {submitStatus === 'error' && (
            <div className="bg-brand-red/10 border border-brand-red/20 rounded-sm p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <p className="text-sm text-brand-red">
                There was a problem sending your message. Please try again later or contact us directly.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                First Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="John"
                className={cn(inputClasses, errors.firstName && "border-brand-red focus:border-brand-red focus:ring-brand-red")}
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-xs text-brand-red mt-1">{errors.firstName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Last Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                className={cn(inputClasses, errors.lastName && "border-brand-red focus:border-brand-red focus:ring-brand-red")}
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="text-xs text-brand-red mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Email Address <span className="text-brand-red">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className={cn(inputClasses, errors.email && "border-brand-red focus:border-brand-red focus:ring-brand-red")}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-brand-red mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="0400 000 000"
                className={cn(inputClasses, errors.phone && "border-brand-red focus:border-brand-red focus:ring-brand-red")}
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-xs text-brand-red mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company Pty Ltd"
                className={inputClasses}
                {...register('company')}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Service Type <span className="text-brand-red">*</span>
              </label>
              <div className="relative">
                <select
                  id="serviceType"
                  className={cn(inputClasses, "appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1.25rem_1.25rem]", errors.serviceType && "border-brand-red focus:border-brand-red focus:ring-brand-red")}
                  {...register('serviceType')}
                >
                  <option value="" disabled className="bg-brand-charcoal">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option} className="bg-brand-charcoal">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {errors.serviceType && (
                <p className="text-xs text-brand-red mt-1">{errors.serviceType.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white/70">
              Message / Details <span className="text-brand-red">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Please provide details about your freight requirements..."
              className={cn(inputClasses, "resize-none", errors.message && "border-brand-red focus:border-brand-red focus:ring-brand-red")}
              {...register('message')}
            />
            {errors.message && (
              <p className="text-xs text-brand-red mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Request...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Submit Request
              </span>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
