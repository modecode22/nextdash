'use client';

import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={'dark'}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-dark-800 group-[.toaster]:text-light-500 group-[.toaster]:border-dark-700 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-light-600',
          actionButton: 'group-[.toast]:bg-dark-500 group-[.toast]:text-primary-500',
          cancelButton: 'group-[.toast]:bg-dark-900 group-[.toast]:text-light-600',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
