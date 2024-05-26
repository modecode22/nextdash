import { LocaleSwitcher, ThemeSwitcher } from '@/components/common';
import { UserNav } from './user-nav';
import { MobileSidebar } from './mobile-sidebar';

export const DashboardHeader = () => {
  return (
    <header className='flex h-14 items-center justify-between border-b border-light-200 dark:border-dark-700 bg-white dark:bg-dark-800 px-4'>
      <div>
        <div className='md:hidden'>
          <MobileSidebar />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <LocaleSwitcher />
        <ThemeSwitcher />
        <UserNav />
      </div>
    </header>
  );
};
