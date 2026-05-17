import { Card, CardHeader, CardTitle, CardSubtitle } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Avatar } from '../ui/Avatar'
import { cn } from '../../lib/cn'
import { transactions, formatCurrency } from '../../data/mock'

export function TransactionList() {
  return (
    <Card variant="default" padding="lg" radius="lg" className="gap-4">
      <CardHeader>
        <div className="flex flex-col">
          <CardTitle>Recent activity</CardTitle>
          <CardSubtitle>Across all accounts</CardSubtitle>
        </div>
        <Button variant="ghost" size="sm">View all</Button>
      </CardHeader>

      <ul className="flex flex-col">
        {transactions.map((t, idx) => {
          const isIncome = t.amount > 0
          return (
            <li
              key={t.id}
              className={cn(
                'flex flex-row items-center gap-3 py-3',
                idx !== transactions.length - 1 && 'border-b border-border',
              )}
            >
              <Avatar name={t.counterparty} size="md" tone={isIncome ? 'success' : 'neutral'} />
              <div className="flex flex-col grow min-w-0">
                <span className="truncate text-(length:--text-body-md) font-[var(--font-weight-medium)] text-text">
                  {t.counterparty}
                </span>
                <div className="flex flex-row items-center gap-2 text-(length:--text-body-sm) text-text-muted">
                  <Badge variant={t.categoryTone} size="sm">{t.category}</Badge>
                  <span>{t.date}</span>
                </div>
              </div>
              <span
                className={cn(
                  'text-(length:--text-body-md) font-(--font-display) font-[var(--font-weight-semibold)] tabular-nums',
                  isIncome ? 'text-success' : 'text-text',
                )}
              >
                {isIncome ? '+' : '−'}
                {formatCurrency(Math.abs(t.amount))}
              </span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
