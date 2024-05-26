'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center duration-100 rounded text-sm font-medium ring-offset-1 transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  ',
  {
    variants: {
      variant: {
        default:
          'dark:bg-dark-800 bg-light-200  dark:text-light-900 text-dark-50  dark:hover:text-light-500 hover:text-dark-500 dark:hover:bg-dark-700 hover:bg-light-400 dark:data-[state=on]:text-primary-500 data-[state=on]:text-dark-900 hover:data-[state=on]:text-dark-500 hover:data-[state=on]:bg-white/80  dark:data-[state=on]:bg-dark-600 data-[state=on]:bg-white   dark:hover:data-[state=on]:text-primary-600 dark:hover:data-[state=on]:bg-dark-700',
      },
      size: {
        default: 'h-8  px-3',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
