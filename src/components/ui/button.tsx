import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center duration-100 border-dashed  justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Primary
        'primary-solid':
          'bg-primary-500 hover:bg-primary-400  text-dark-500 hover:text-dark-600 active:text-dark-900  active:bg-primary-300      ',
        'primary-outline':
          ' border border-primary-500 hover:text-dark-600 dark:text-primary-500 dark:hover:text-primary-400 dark:active:text-primary-400 dark:hover:bg-dark-800  dark:active:bg-dark-700       text-dark-500 hover:bg-primary-200 hover:border-transparent active:bg-primary-100 active:text-dark-900',
        'primary-ghost':
          'text-dark-500 dark:text-primary-500 dark:hover:bg-dark-800 dark:active:bg-dark-700  hover:bg-primary-100 acitve:bg-primary-50',
        // Transparent
        transparent: 'hover:text-light-500 text-light-800',

        // Light
        'light-solid':
          'bg-light-500 hover:bg-light-400 text-dark-500 hover:text-dark-600 active:text-dark-900  active:bg-light-300   ',
        'light-outline':
          ' border border-light-500 hover:text-dark-600  dark:text-light-500  dark:hover:bg-dark-300 dark:active:bg-dark-200   dark:hover:text-light-200 dark:active:text-light-50   text-dark-500 hover:bg-light-200 hover:border-transparent active:bg-light-100 active:text-dark-900',
        'light-ghost':
          'text-dark-500  hover:bg-light-100 acitve:bg-light-50 dark:hover:bg-dark-300 dark:active:bg-dark-200 dark:text-light-500',

        // Dark
        'dark-solid':
          'bg-dark-500 hover:bg-dark-400 text-primary-500 hover:text-primary-600 active:text-primary-900  active:bg-dark-300     ',
        'dark-outline':
          'border border-dark-50 hover:text-light-900       text-dark-50 hover:bg-dark-400 dark:hover:bg-dark-800 dark:hover:text-dark-100 dark:active:text-dark-50 dark:active:bg-dark-700 hover:border-transparent active:bg-dark-300 dark:active:text-dark-50 active:text-light-600',
        'dark-ghost':
          'text-dark-500 dark:text-light-500 dark:hover:bg-dark-800 dark:active:bg-dark-700  hover:bg-light-400 acitve:bg-light-300',
        link: 'link ',
      },
      size: {
        default: 'h-8 px-4 py-2',
        sm: 'h-6 rounded px-3',
        lg: 'h-10 rounded px-8',
        icon: 'h-8 w-8',
        'small-icon': 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'primary-solid',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
