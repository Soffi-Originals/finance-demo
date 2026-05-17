import { cn } from '../../lib/cn'

const variantClasses = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:shadow-[var(--shadow-focus-ring)]',
  secondary:
    'bg-surface-elevated text-text border border-border hover:border-border-strong hover:bg-surface-muted',
  ghost:
    'bg-transparent text-text-muted hover:bg-surface-muted hover:text-text',
  soft:
    'bg-primary-soft text-primary hover:bg-primary-soft/80',
  danger:
    'bg-danger text-primary-foreground hover:opacity-90',
}

const sizeClasses = {
  sm: 'h-8 px-3 text-(length:--text-body-sm) gap-1.5 rounded-(--radius-sm)',
  md: 'h-10 px-4 text-(length:--text-body-md) gap-2 rounded-(--radius-md)',
  lg: 'h-12 px-5 text-(length:--text-body-lg) gap-2 rounded-(--radius-lg)',
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={cn(
        'inline-flex items-center justify-center font-(--font-sans) font-[var(--font-weight-medium)] tracking-[var(--tracking-body)]',
        'transition-colors duration-150 ease-out',
        'focus:outline-none focus-visible:ring-0',
        'disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
    >
      {children}
    </button>
  )
}
