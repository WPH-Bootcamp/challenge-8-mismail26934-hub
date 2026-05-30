import { cn } from '../../lib/cn';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'flex w-full max-w-4xl flex-col gap-section-header',
        align === 'center'
          ? 'mx-auto items-center text-center'
          : 'items-start text-left',
        className
      )}
    >
      <h2 className='text-display-sm font-bold text-fg lg:text-display-xl'>
        {title}
      </h2>
      <p className='text-section-subtitle text-muted lg:text-right'>
        {subtitle}
      </p>
    </header>
  );
}
