import { useState, ComponentProps } from 'react';
import { cn } from '../../lib/utils';

interface BlurImageProps extends ComponentProps<'img'> {
  wrapperClassName?: string;
}

export function BlurImage({ wrapperClassName, className, alt, ...props }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn('overflow-hidden relative bg-brand-charcoal', wrapperClassName)}>
      <img
        {...props}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out w-full h-full object-cover',
          isLoading ? 'scale-110 blur-xl opacity-50' : 'scale-100 blur-0 opacity-100',
          className
        )}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
