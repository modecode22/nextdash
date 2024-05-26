import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border-dashed rounded border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 w-fit',
  {
    variants: {
      variant: {
        default: ' bg-dark-500 border-dark-50  text-light-800 hover:bg-dark-400',
        primary: 'bg-primary-500 border-primary-700  text-dark-500 hover:bg-primary-400',
        outline:
          ' dark:border-primary-700 border-light-900  dark:text-primary-500 text-light-900 dark:hover:bg-primary-950/20 hover:text-dark-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
