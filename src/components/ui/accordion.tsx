'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { LuChevronDown } from 'react-icons/lu';

import { cn } from '@/lib/utils';

// const Accordion = AccordionPrimitive.Root

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn('w-full  overflow-hidden rounded', className)}
    {...props}
  />
));

Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      ' bg-white p-1 px-8  transition-colors  duration-100 dark:bg-dark-800 [&[data-state=open]]:text-dark-500 dark:[&[data-state=open]]:text-light-500',
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1   items-center    justify-between   py-4  font-medium underline-offset-2 transition-all duration-100  [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-dark-900 [&[data-state=open]]:decoration-primary-500 dark:[&[data-state=open]]:text-light-500 ',
        className
      )}
      {...props}>
      {children}
      <LuChevronDown className='h-4 w-4 shrink-0 transition-transform duration-100' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm  text-dark-900 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down dark:text-dark-500'
    {...props}>
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
