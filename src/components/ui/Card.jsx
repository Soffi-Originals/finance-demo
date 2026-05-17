import { cn } from '../../lib/cn'

const variantClasses = {
  default:
    'bg-surface text-text border border-border shadow-[var(--shadow-card)]',
  elevated:
    'bg-surface-elevated text-text shadow-[var(--shadow-elevated)]',
  muted:
    'bg-surface-muted text-text border border-border',
  feature:
    'bg-primary text-primary-foreground shadow-[var(--shadow-elevated)]',
  outline:
    'bg-transparent text-text border border-border',
}

const paddingClasses = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
  xl: 'p-7',
}

const radiusClasses = {
  md: 'rounded-(--radius-md)',
  lg: 'rounded-(--radius-lg)',
  xl: 'rounded-(--radius-xl)',
}

export function Card({
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  className,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col',
        variantClasses[variant],
        paddingClasses[padding],
        radiusClasses[radius],
        className,
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div
      {...props}
      className={cn('flex flex-row items-center justify-between gap-3', className)}
    >
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      {...props}
      className={cn(
        'text-(length:--text-heading-md) font-(--font-display) font-[var(--font-weight-semibold)] tracking-[var(--tracking-heading)]',
        className,
      )}
    >
      {children}
    </h3>
  )
}

export function CardSubtitle({ className, children, ...props }) {
  return (
    <p
      {...props}
      className={cn('text-(length:--text-body-sm) text-text-muted', className)}
    >
      {children}
    </p>
  )
}
