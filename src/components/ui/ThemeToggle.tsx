import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../lib/cn';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={cn(
        'theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-lg text-fg transition-colors hover:bg-hover',
        className
      )}
    >
      {isDark ? (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
          <path
            d='M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M18.36 5.64l1.42-1.42M5.64 18.36l-1.42 1.42'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='2' />
        </svg>
      ) : (
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
          <path
            d='M21 12.79A9 9 0 1 1 11.21 3c.5 0 .79.58.5 1a7 7 0 0 0 8.29 8.29c.42-.29 1 .01 1 .5Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </button>
  );
}
