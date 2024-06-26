import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { cn } from '../public/utils/shadcnUI/cn';

import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='h-12 bg-slate-800 border border-slate-700 m-0'>
      <NavigationMenu.Root className='relative z-50 flex w-screen justify-center'>
        <NavigationMenu.List className='center shadow-blackA4 m-1 flex list-none rounded-[6px] bg-slate-800 p-1 px-8'>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='text-zinc-200 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
              User{' '}
              <CaretDownIcon
                className='text-zinc-200 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='bg-slate-200 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-auto sm:w-auto'>
              <ul className='one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px]'>
                <ListItem href='/UserDashboard' title='Overview'>
                  Get high-level information regarding your cluster for the last
                  seven days
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='text-zinc-200 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
              Dashboards{' '}
              <CaretDownIcon
                className='text-zinc-200 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='absolute top-0 left-0 w-full sm:w-auto bg-slate-200'>
              <ul className='m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-flow-col sm:grid-rows-3'>
                <Link href='/Dashboards/MetricsDashboard' passHref>
                  <ListItem
                    title='Metrics Dashboard'
                    href='/primitives/docs/overview/introduction'
                  >
                    View the cumulative cost for a certain time frame, and
                    understand the allocated resources of your cluster, based on
                    namespace
                  </ListItem>
                </Link>

                <Link href='/Dashboards/CostDashboard' passHref>
                  <ListItem
                    title='Cost Dashboard'
                    href='/primitives/docs/overview/getting-started'
                  >
                    View the allocated resources to Kubernetes workloads per
                    namespace, node, or deployment
                  </ListItem>
                </Link>

                <Link href='/Dashboards/SavingDashboard' passHref>
                  <ListItem
                    title='Savings Dashboard'
                    href='/primitives/docs/guides/styling'
                  >
                    Predict your potential savings, visualize the potential
                    savings, and get cluster setup recommendatations
                  </ListItem>
                </Link>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className='text-zinc-200 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-4 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]'>
              HPA
              <CaretDownIcon
                className='text-zinc-200 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className='bg-slate-200 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto'>
              <ul className='one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px]'>
                <ListItem
                  href='/Dashboards/HPADashboard'
                  title='Custom Scaling'
                >
                  Dive into the HPA Customization Board
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className='text-zinc-200 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]'
              href='https://github.com/Optikube'
            >
              GitHub
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className='data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]'>
            <div className='relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white' />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className='perspective-[2000px] absolute top-full left-0 flex w-full justify-center'>
          <NavigationMenu.Viewport className='data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]' />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenu.NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
export default NavBar;
