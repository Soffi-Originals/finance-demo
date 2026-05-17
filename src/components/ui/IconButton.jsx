import { cn } from '../../lib/cn'

const variantClasses = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary-hover',
  secondary:
    'bg-surface-elevated text-text border border-border hover:border-border-strong hover:bg-surface-muted',
  ghost:
    'bg-transparent text-text-muted hover:bg-surface-muted hover:text-text',
  soft:
    'bg-primary-soft text-primary hover:bg-primary-soft/80',
}

const sizeClasses = {
  sm: 'h-8 w-8 rounded-(--radius-sm)',
  md: 'h-10 w-10 rounded-(--radius-md)',
  lg: 'h-12 w-12 rounded-(--radius-lg)',
}

export function IconButton({
  variant = 'ghost',
  size = 'md',
  className,
  children,
  'aria-label': ariaLabel,
  ...props
}) {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center justify-center',
        'transition-colors duration-150 ease-out',
        'focus:outline-none focus-visible:shadow-[var(--shadow-focus-ring)]',
        'disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  )
}
