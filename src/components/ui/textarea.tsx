import type { TextareaHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'min-h-[134px] w-full rounded-xl border border-border-muted bg-transparent px-4 py-2 text-base font-medium text-fg placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30',
        className
      )}
      {...props}
    />
  );
}
