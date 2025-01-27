'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardHeader } from '../../ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, TooltipProps } from 'recharts';
import { useDir } from '@/hooks/use-dir';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

const data = [
  {
    month: 'Jan',
    sales: 4000,
  },
  {
    month: 'Feb',
    sales: 3000,
  },
  {
    month: 'Mar',
    sales: 2000,
  },
  {
    month: 'Apr',
    sales: 2780,
  },
  {
    month: 'May',
    sales: 1890,
  },
  {
    month: 'Jun',
    sales: 2390,
  },
  {
    month: 'Jul',
    sales: 3490,
  },
  {
    month: 'Aug',
    sales: 4000,
  },
  {
    month: 'Sep',
    sales: 3000,
  },
  {
    month: 'Oct',
    sales: 2000,
  },
  {
    month: 'Nov',
    sales: 2780,
  },
  {
    month: 'Dec',
    sales: 1890,
  },
];

type OverviewChartProps = {
  title: string;
};

export const OverviewChart = ({ title }: OverviewChartProps) => {
  const direction = useDir();

  useEffect(() => {
    // Suppressing defaultProps warning from recharts until it's fixed
    const error = console.error;
    console.error = (...args: any) => {
      if (/defaultProps/.test(args[0])) return;
      error(...args);
    };
  }, []);

  return (
    <Card className='lg:col-span-4'>
      <CardHeader className='text-2xl font-semibold leading-none tracking-tight text-dark-500 dark:text-light-500'>{title}</CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' className='!h-[240px] md:!h-[350px]'>
          <BarChart
            style={{ direction: 'ltr' }}
            margin={{ left: 0, right: 0 }}
            data={data}
            width={500}
            height={300}>
            <XAxis
              tickLine={false}
              axisLine={false}
              dataKey='month'
              strokeWidth={0}
              className='fill-light-900 dark:fill-dark-50 text-dark-500 dark:text-light-500 text-sm ltr:font-inter rtl:font-cairo'
              style={{
                fill: 'currentColor',
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              orientation={direction === 'rtl' ? 'right' : 'left'}
              className=' text-sm text-dark-500 dark:text-light-500 fill-light-900 dark:fill-dark-50'
              tickFormatter={(v) => `$${v}`}
              style={{
                fill: 'currentColor',
              }}
            />
            <Tooltip
              wrapperClassName='!bg-popover !rounded-md !border-border !text-dark-500 !dark:text-light-500'
              labelClassName='!text-dark-500 !dark:text-light-500'
              content={<TooltipContent />}
              cursor={{
                className: 'fill-primary-50/50 dark:fill-primary-500/20',
              }}
            />
            <Bar dataKey='sales' className='fill-primary-500' radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

const TooltipContent = ({ payload, active, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <Card className='!rounded-md !border-border !bg-popover !text-popover-foreground'>
        <CardHeader className='p-4 pb-0'>{label}</CardHeader>
        <CardContent className='p-4 pt-0'>
          <p className='text-sm'>Sales: ${payload[0].value}</p>
        </CardContent>
      </Card>
    );
  }

  return null;
};
