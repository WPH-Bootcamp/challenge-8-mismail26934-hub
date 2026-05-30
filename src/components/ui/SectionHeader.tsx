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
        'flex w-full max-w-4xl flex-col gap-[11px]',
        align === 'center'
          ? 'mx-auto items-center text-center'
          : 'items-start text-left',
        className
      )}
    >
      <h2 className='text-display-sm font-bold text-fg lg:text-display-xl'>
        {title}
      </h2>
      <p className='text-body-sm-medium text-muted lg:text-lg lg:font-medium lg:leading-8'>
        {subtitle}
      </p>
    </header>
  );
}
