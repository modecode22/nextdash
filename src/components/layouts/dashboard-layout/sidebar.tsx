'use client';

import { cn } from '@/utils/cn';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { SidebarItem } from './sidebar-item';
import { useSidebar } from '@/zustand/sidebar-store';
import { TooltipProvider } from '@/ui/tooltip';
import { sidebarLinks } from '@/constants/sidebar-links';

export const Sidebar = () => {
  const { isOpen, toggle } = useSidebar((state) => state);
  return (
    <>
      {/* To mock sidebar collapsing since aside is fixed for main tag */}
      <div
        aria-expanded={isOpen}
        className={cn(
          'relative hidden h-screen shrink-0 duration-300 md:block',
          isOpen ? 'w-[264px]' : 'w-14'
        )}
      />
      <aside
        className={cn(
          'fixed top-0 z-50 hidden h-screen shrink-0 dark:bg-dark-800 bg-white transition-[width] duration-300 md:block ltr:left-0 ltr:border-r rtl:right-0 rtl:border-l border-light-200 dark:border-dark-700',
          isOpen ? 'w-[264px]' : 'w-14'
        )}>
        <button
          onClick={toggle}
          aria-label='toggle sidebar'
          className='absolute top-10 z-20 flex size-6 items-center justify-center rounded-full border border-light-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-0 ring-offset-1 ring-offset-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 ltr:right-0 ltr:translate-x-1/2 rtl:left-0 rtl:-translate-x-1/2'>
          {isOpen ? (
            <ArrowLeft className='text-dark-500 dark:text-light-500 rtl:rotate-180' size={18} />
          ) : (
            <ArrowRight className='text-dark-500 dark:text-light-500 rtl:rotate-180' size={18} />
          )}
        </button>
        <SidebarNav
          heading={
            <div className={cn( isOpen ? '':'justify-center','flex h-14  items-center gap-2 overflow-hidden border-b border-light-200 dark:border-dark-700 px-6 py-5')}>
              <svg
                className='w-auto shrink-0'
                aria-label='logo'
                height='22'
                role='img'
                viewBox='0 0 74 64'>
                <path
                  d='M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z'
                  className='fill-primary-500 dark:fill-primary-500'
                />
              </svg>
              {isOpen && <span className='whitespace-nowrap text-sm'>NextJS & Shadcn</span>}
            </div>
          }
        />
      </aside>
    </>
  );
};

type SidebarNavProps = {
  heading: React.ReactNode;
  ignoreCollapse?: boolean;
};

export const SidebarNav = ({ heading, ignoreCollapse }: SidebarNavProps) => {
  return (
    <nav className='max-h-screen overflow-y-auto'>
      <div className='sticky top-0 z-10 bg-white dark:bg-dark-800'>{heading}</div>
      <TooltipProvider delayDuration={0}>
        <div className='flex justify-center text-dark-500 dark:text-light-500'>
          <ul className='w-full overflow-hidden px-3 py-4'>
            {sidebarLinks.map((link, idx) => (
              <SidebarItem link={link} key={idx} ignoreCollapse={ignoreCollapse} />
            ))}
          </ul>
        </div>
      </TooltipProvider>
    </nav>
  );
};
