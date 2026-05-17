import { cn } from '../../lib/cn'

const sizeClasses = {
  sm: 'h-8 w-8 text-(length:--text-body-sm)',
  md: 'h-10 w-10 text-(length:--text-body-md)',
  lg: 'h-12 w-12 text-(length:--text-body-lg)',
  xl: 'h-16 w-16 text-(length:--text-heading-md)',
}

const toneClasses = {
  primary: 'bg-primary-soft text-primary',
  accent: 'bg-info-soft text-info-foreground',
  success: 'bg-success-soft text-success-foreground',
  warning: 'bg-warning-soft text-warning-foreground',
  neutral: 'bg-surface-muted text-text',
}

export function Avatar({ name = '', size = 'md', tone = 'primary', className, ...props }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <span
      {...props}
      className={cn(
        'inline-flex items-center justify-center rounded-(--radius-pill) font-(--font-display) font-[var(--font-weight-semibold)]',
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      {initials || '·'}
    </span>
  )
}
