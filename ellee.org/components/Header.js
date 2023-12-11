import * as React from 'react';
import { cn } from '@/lib/utils';

import { Logo } from './Logo';
import { MobileMainMenu } from './menus/MobileMainMenu';
import MainMenu from './menus/MainMenu';
import { ModeToggle } from './ModeToggle';
import { SocialMediaIcons } from '@/data/SocialIcons';

export default function Header({ children, className }) {
  return (
    <header>
      <div
        className={cn(
          'flex w-full flex-row justify-between pt-4 md:pt-0 px-8 lg:px-8 items-center mx-auto max-w-screen-xl',
          className
        )}
      >
        <div>
          <Logo />
        </div>
        <div className={cn('hidden mainmenu:block', className)}>
          <MainMenu />
        </div>
        <div className={cn('hidden mainmenu:block', className)}>
          <ul className={cn('flex gap-4 items-center', className)}>
            <SocialMediaIcons />
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
        <div className={cn('flex mainmenu:hidden', className)}>
          <MobileMainMenu />
        </div>
        {children}
      </div>
    </header>
  );
}
