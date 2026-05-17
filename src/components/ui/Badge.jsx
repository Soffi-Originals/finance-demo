import { cn } from '../../lib/cn'

const variantClasses = {
  neutral: 'bg-surface-muted text-text-muted border border-border',
  primary: 'bg-primary-soft text-primary border border-transparent',
  success: 'bg-success-soft text-success-foreground border border-transparent',
  warning: 'bg-warning-soft text-warning-foreground border border-transparent',
  danger: 'bg-danger-soft text-danger-foreground border border-transparent',
  info: 'bg-info-soft text-info-foreground border border-transparent',
}

const sizeClasses = {
  sm: 'h-5 px-2 text-(length:--text-label) gap-1 rounded-(--radius-pill)',
  md: 'h-6 px-2.5 text-(length:--text-body-sm) gap-1.5 rounded-(--radius-pill)',
}

export function Badge({
  variant = 'neutral',
  size = 'sm',
  className,
  children,
  ...props
}) {
  return (
    <span
      {...props}
      className={cn(
        'inline-flex items-center justify-center font-(--font-sans) font-[var(--font-weight-medium)] tracking-[var(--tracking-label)] uppercase',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </span>
  )
}
