import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  PieChart,
  Target,
  Settings,
  Wallet,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { Avatar } from '../ui/Avatar'
import { navItems, account } from '../../data/mock'

const iconMap = {
  overview: LayoutDashboard,
  transactions: ArrowLeftRight,
  cards: CreditCard,
  budgets: PieChart,
  goals: Target,
  settings: Settings,
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-border bg-surface">
      <div className="flex flex-row items-center gap-2.5 px-6 h-16 border-b border-border">
        <span className="flex items-center justify-center h-9 w-9 rounded-(--radius-md) bg-primary text-primary-foreground">
          <Wallet className="h-4.5 w-4.5" />
        </span>
        <span className="flex flex-col">
          <span className="text-(length:--text-heading-md) font-(--font-display) font-[var(--font-weight-semibold)] tracking-[var(--tracking-heading)] text-text">
            Northwind
          </span>
          <span className="text-(length:--text-label) text-text-subtle uppercase tracking-[var(--tracking-label)]">
            Personal
          </span>
        </span>
      </div>

      <nav className="flex flex-col gap-1 p-3 grow">
        {navItems.map((item) => {
          const Icon = iconMap[item.id]
          return (
            <a
              key={item.id}
              href="#"
              className={cn(
                'flex flex-row items-center gap-3 h-10 px-3 rounded-(--radius-md) text-(length:--text-body-md) transition-colors',
                item.active
                  ? 'bg-primary-soft text-primary font-[var(--font-weight-medium)]'
                  : 'text-text-muted hover:bg-surface-muted hover:text-text',
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>

      <div className="flex flex-row items-center gap-3 p-3 mx-3 mb-3 rounded-(--radius-md) border border-border bg-surface-muted">
        <Avatar name={account.ownerName} size="sm" tone="primary" />
        <div className="flex flex-col min-w-0">
          <span className="truncate text-(length:--text-body-sm) font-[var(--font-weight-medium)] text-text">
            {account.ownerName}
          </span>
          <span className="truncate text-(length:--text-label) text-text-subtle">
            {account.ownerEmail}
          </span>
        </div>
      </div>
    </aside>
  )
}
