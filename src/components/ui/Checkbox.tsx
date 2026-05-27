import { cn } from '../../lib/cn';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  id?: string;
}

export function Checkbox({ checked, onChange, id }: CheckboxProps) {
  return (
    <button
      type='button'
      id={id}
      role='checkbox'
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        'flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors',
        checked
          ? 'border-primary bg-primary'
          : 'border-border-muted bg-transparent'
      )}
    >
      {checked ? (
        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M2 6L5 9L10 3'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ) : null}
    </button>
  );
}
