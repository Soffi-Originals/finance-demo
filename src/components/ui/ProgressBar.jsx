import { cn } from '../../lib/cn'

const toneClasses = {
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

const sizeClasses = {
  sm: 'h-1',
  md: 'h-1.5',
  lg: 'h-2.5',
}

export function ProgressBar({ value = 0, tone = 'primary', size = 'md', className, ...props }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div
      {...props}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        'flex w-full overflow-hidden rounded-(--radius-pill) bg-surface-muted',
        sizeClasses[size],
        className,
      )}
    >
      <div
        className={cn('flex rounded-(--radius-pill) transition-[width] duration-300 ease-out', toneClasses[tone])}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
