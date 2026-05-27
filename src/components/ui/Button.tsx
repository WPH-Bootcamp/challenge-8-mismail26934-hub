import type { ButtonProps } from '../../types';
import { cn } from '../../lib/cn';

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-white shadow-[inset_4px_4px_4px_#ffffff40] hover:bg-primary/90',
  ghost: 'bg-transparent text-fg hover:bg-hover',
  white:
    'bg-white text-[#0a0d12] shadow-[inset_4px_4px_4px_#ffffff40] hover:bg-white/90',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'min-h-9 px-4 py-2 text-sm',
  md: 'min-h-11 px-6 py-2 text-base',
  lg: 'min-h-12 px-8 py-2 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className,
  disabled = false,
  type = 'button',
  href,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
