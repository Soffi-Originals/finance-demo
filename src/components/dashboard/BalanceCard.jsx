import { ArrowUpRight, ArrowDownRight, EyeOff } from 'lucide-react'
import { Card } from '../ui/Card'
import { IconButton } from '../ui/IconButton'
import { account, formatCurrency } from '../../data/mock'

export function BalanceCard() {
  return (
    <Card variant="feature" padding="xl" radius="xl" className="gap-6">
      <div className="flex flex-row items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-(length:--text-label) uppercase tracking-[var(--tracking-label)] opacity-80">
            Total balance
          </span>
          <span className="text-(length:--text-body-sm) opacity-70">
            Visa · Debit · {account.cardLast4}
          </span>
        </div>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="Hide balance"
          className="text-primary-foreground hover:bg-primary-foreground/10"
        >
          <EyeOff className="h-4 w-4" />
        </IconButton>
      </div>

      <div className="flex flex-row items-baseline gap-2">
        <span className="text-(length:--text-display-2xl) font-(--font-display) font-[var(--font-weight-bold)] tracking-[var(--tracking-display)]">
          {formatCurrency(account.balance, account.currency)}
        </span>
      </div>

      <div className="flex flex-row gap-4 pt-2 border-t border-primary-foreground/15">
        <div className="flex flex-col gap-1 grow">
          <span className="flex flex-row items-center gap-1.5 text-(length:--text-label) uppercase tracking-[var(--tracking-label)] opacity-80">
            <ArrowDownRight className="h-3.5 w-3.5" />
            Income this month
          </span>
          <span className="text-(length:--text-heading-md) font-(--font-display) font-[var(--font-weight-semibold)]">
            {formatCurrency(account.monthlyIncome, account.currency)}
          </span>
        </div>
        <div className="flex flex-col gap-1 grow">
          <span className="flex flex-row items-center gap-1.5 text-(length:--text-label) uppercase tracking-[var(--tracking-label)] opacity-80">
            <ArrowUpRight className="h-3.5 w-3.5" />
            Spent this month
          </span>
          <span className="text-(length:--text-heading-md) font-(--font-display) font-[var(--font-weight-semibold)]">
            {formatCurrency(account.monthlySpend, account.currency)}
          </span>
        </div>
      </div>
    </Card>
  )
}
