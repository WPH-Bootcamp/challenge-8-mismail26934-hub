import type { InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'h-12 w-full rounded-xl border border-border-muted bg-transparent px-4 py-2 text-base font-medium text-fg placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30',
        className
      )}
      {...props}
    />
  );
}
