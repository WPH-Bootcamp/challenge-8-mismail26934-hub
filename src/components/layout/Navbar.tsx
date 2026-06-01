import { useEffect, useState } from 'react';
import logoSymbol from '../../assets/images/icon/logo-symbol.png';
import { navItems } from '../../data/navigation';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

const SCROLL_THRESHOLD = 8;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? cn('border-nav-border bg-nav nav-blur')
          : cn('border-transparent bg-transparent nav-blur-off')
      )}
    >
      <div
        className={cn(
          'container-page flex flex-row justify-between items-center px-4 py-6',
          'md:h-18 md:gap-6 md:px-6',
          'lg:h-21 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-6 lg:px-8',
          'xl:px-gutter xl:gap-x-10',
          '2xl:gap-x-12'
        )}
      >
        {/* Logo */}
        <a
          href='/'
          className='flex min-w-0 items-center gap-2 justify-self-start md:gap-2.5'
        >
          <img
            src={logoSymbol}
            alt='TechPartner Logo'
            className='h-7 w-7 shrink-0 object-contain md:h-8 md:w-8'
            aria-hidden='true'
          />
          <span className='font-logo text-lg font-semibold leading-7 text-logo md:text-xl md:leading-8 lg:text-2xl'>
            Your Logo
          </span>
        </a>

        {/* Nav links — desktop */}
        <nav
          aria-label='Primary'
          className={cn(
            'hidden min-w-0 max-w-full items-center justify-center justify-self-center overflow-x-auto',
            'lg:flex lg:gap-0.5',
            'xl:gap-1 2xl:gap-2'
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'shrink-0 whitespace-nowrap rounded-full font-semibold text-fg transition-colors hover:bg-hover',
                'px-3 py-2 text-sm',
                'lg:px-2.5 lg:py-2 lg:text-sm',
                'xl:px-3.5 xl:text-nav-link',
                '2xl:px-4 2xl:text-base'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div
          className={cn(
            'flex shrink-0 items-center justify-end justify-self-end',
            'gap-2',
            'md:gap-3',
            'lg:gap-4'
          )}
        >
          <ThemeToggle />
          <div className='hidden lg:contents'>
            <Button
              href='#contact'
              size='md'
              className='min-w-0 shrink-0 lg:min-w-30 xl:min-w-40 2xl:min-w-cta-wide'
            >
              Let's Talk
            </Button>
          </div>

          <button
            type='button'
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-lg text-fg',
              'transition-colors hover:bg-hover',
              'lg:hidden'
            )}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              {menuOpen ? (
                <path
                  d='M6 6l12 12M18 6L6 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              ) : (
                <path
                  d='M4 7h16M4 12h16M4 17h16'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-y-auto border-t transition-[background-color,border-color,backdrop-filter] duration-300',
          'max-h-[calc(100dvh-64px)] md:max-h-[calc(100dvh-4.5rem)]',
          'lg:hidden',
          scrolled || menuOpen
            ? cn('border-nav-border bg-mobile-menu nav-blur')
            : cn('border-transparent bg-transparent nav-blur-off'),
          menuOpen ? 'block' : 'hidden'
        )}
      >
        <nav className='flex flex-col gap-1 px-4 py-4 md:gap-1.5 md:px-6 md:py-5'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className='rounded-lg px-4 py-3 text-base font-semibold text-fg transition-colors hover:bg-hover md:py-3.5'
            >
              {item.label}
            </a>
          ))}
          <Button href='#contact' className='mt-2 w-full md:mt-3'>
            Let's Talk
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
