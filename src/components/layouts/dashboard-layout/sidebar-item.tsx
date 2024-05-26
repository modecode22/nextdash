'use client';
import { NextLink } from '@/components/common';
import { SidebarLink, SidebarLinkItem } from '@/constants/sidebar-links';
import { useDir } from '@/hooks/use-dir';
import { usePathname } from '@/i18n';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion';
import { Button, buttonVariants } from '@/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Tooltip, TooltipContent } from '@/ui/tooltip';
import { cn } from '@/utils/cn';
import { useSidebar } from '@/zustand/sidebar-store';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

type SidebarItemProps = {
  link: SidebarLink;
  ignoreCollapse?: boolean;
};
export const SidebarItem = ({ link, ignoreCollapse }: SidebarItemProps) => {
  const isOpen = useSidebar((state) => state.isOpen) || ignoreCollapse;
  const t = useTranslations('Dashboard');

  if (link.type === 'divider') {
    if (!isOpen) return null;
    return (
      <li className='my-2'>
        <span className='block text-xs font-semibold uppercase text-dark-500 dark:text-light-500'>
          {t(link.title)}
        </span>
      </li>
    );
  }

  if (link.children)
    return (
      <motion.li transition={{ duration: 0.3 }} layout='position' className='relative mb-2 w-full'>
        <SidebarItemAccordion link={link} ignoreCollapse={ignoreCollapse} />
      </motion.li>
    );

  return (
    <motion.li transition={{ duration: 0.3 }} layout='position' className='mb-2'>
      <SidebarNavLink link={link} ignoreCollapse={ignoreCollapse} />
    </motion.li>
  );
};

type NavLinkProps = { link: SidebarLinkItem; ignoreCollapse?: boolean };

const SidebarNavLink = ({ link, ignoreCollapse }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = `/dashboard${link.href}` === pathname;
  const isOpen = useSidebar((state) => state.isOpen) || ignoreCollapse;
  const t = useTranslations('Dashboard');

  const href = link.hrefAsIs ? link.href : `/dashboard${link.href}`;

  if (!isOpen)
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild className='duration-0'>
          <NextLink
            href={href}
            className={cn(
              buttonVariants({ variant: 'dark-ghost' }),
              'relative flex size-8 justify-center items-center hover:bg-light-50 focus:bg-light-100 dark:hover:bg-dark-900 dark:focus:bg-dark-800',
              isActive && 'bg-primary-500 hover:bg-primary-500 active:bg-primary-500 dark:hover:bg-primary-500 dark:active:bg-primary-500 focus:bg-primary-500 dark:focus:bg-primary-500 text-dark-900 dark:bg-primary-500 dark:text-dark-900 group'
            )}>
            <link.icon size={18} className='text-accent-foreground shrink-0' />
          </NextLink>
        </TooltipTrigger>
        <TooltipContent side='right' sideOffset={12} className='flex items-center gap-2'>
          {t(link.title)}
        </TooltipContent>
      </Tooltip>
    );

  return (
    <NextLink
      className={cn(
        buttonVariants({ variant: 'dark-ghost' }),
        'hover:bg-light-50 dark:hover:bg-dark-900 focus:bg-light-50 dark:focus:bg-dark-700 relative flex  justify-start',
        isActive && 'bg-primary-500 hover:bg-primary-500 active:bg-primary-500 dark:hover:bg-primary-500 dark:active:bg-primary-500 focus:bg-primary-500 dark:focus:bg-primary-500 text-dark-900 dark:bg-primary-500 dark:text-dark-900 group'
      )}
      href={href}>
      <link.icon size={18} className='text-accent-foreground group-[]:text-primary shrink-0' />
      <span className='absolute capitalize ltr:left-11 rtl:right-11'>{t(link.title)}</span>
    </NextLink>
  );
};

const SidebarItemAccordion = ({ link, ignoreCollapse }: NavLinkProps) => {
  const isOpen = useSidebar((state) => state.isOpen) || ignoreCollapse;
  const dir = useDir();
  const isRTL = dir === 'rtl';
  const t = useTranslations('Dashboard');

  if (!isOpen) {
    return (
      <DropdownMenu dir={dir}>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild className='duration-0'>
            <DropdownMenuTrigger asChild>
              <Button
                variant='dark-ghost'
                className='hover:bg-accent focus:bg-accent relative flex size-8 justify-center items-center duration-0'>
                <link.icon size={18} className='text-accent-foreground shrink-0' />
                <span className='sr-only'>{t(link.title)}</span>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent
            side={isRTL ? 'left' : 'right'}
            sideOffset={12}
            className='flex items-center gap-2'>
            {t(link.title)}
            <ChevronRight size={16} className='rtl:rotate-180' />
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent sideOffset={8} side={isRTL ? 'left' : 'right'} align='start'>
          <DropdownMenuLabel>{t(link.title)}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {link.children!.map((child) => (
            <DropdownMenuItem key={child.title + child.href} asChild>
              <NextLink href={child.hrefAsIs ? child.href : `/dashboard${link.href}${child.href}`}>
                <span> {t(child.title)}</span>
              </NextLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Accordion key={link.href} type='single' collapsible className='w-full '>
      <AccordionItem value={link.title} className='w-full border-b-0  '>
        <AccordionTrigger
          className={cn(
            buttonVariants({ variant: 'dark-ghost' }),
            'relative flex  w-full justify-between  duration-0 '
          )}>
          <div>
            <link.icon size={18} className='text-accent-foreground shrink-0' />
          </div>
          <span className='absolute capitalize ltr:left-11 rtl:right-11'> {t(link.title)}</span>
        </AccordionTrigger>
        <AccordionContent className='mt-3 space-y-2 pb-1 ltr:pl-4 ltr:pr-1 rtl:pl-1 rtl:pr-4'>
          {link.children!.map((child) => (
            <NextLink
              href={child.hrefAsIs ? child.href : `/dashboard${link.href}${child.href}`}
              key={child.title}
              className={cn(
                buttonVariants({ variant: 'dark-ghost' }),
                'hover:bg-accent focus:bg-accent relative flex h-10 w-full justify-start gap-3'
              )}>
              <div className='bg-accent-foreground size-2 rounded-full border' />
              <span> {t(child.title)}</span>
            </NextLink>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
