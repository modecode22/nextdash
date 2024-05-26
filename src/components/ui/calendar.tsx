'use client';

import * as React from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'light-outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'muted-text rounded w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l last:[&:has([aria-selected])]:rounded-r focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'light-ghost' }),
          'h-9 w-9 p-0 font-normal  aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-light-300 bg-dark-700  text-dark-500 dark:text-primary-500 hover:bg-light-200 dark:hover:bg-dark-700 dark:hover:text-primary-600 hover:text-dark-600 focus:bg-light-300 dark:focus:bg-dark-700 dark:focus:text-primary-700 focus:text-dark-900',
        day_today: 'dark:bg-dark-500/20 bg-light-300/20 dark:text-primary-900/50 text-dark-900/50',
        day_outside:
          'day-outside text-dark-50 opacity-50 dark:aria-selected:bg-dark-500/50 aria-selected:bg-light-300/50 dark:aria-selected:text-primary-500 aria-selected:text-dark-900 aria-selected:opacity-40',
        day_disabled: 'dark:text-dark-100 text-light-900 opacity-50',
        day_range_middle:
          'dark:aria-selected:bg-dark-300 aria-selected:bg-light-100 dark:aria-selected:text-primary-500 aria-selected:text-dark-500',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <LuChevronLeft {...props} className='h-4 w-4' />,
        IconRight: ({ ...props  }) => <LuChevronRight {...props} className='h-4 w-4' />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
