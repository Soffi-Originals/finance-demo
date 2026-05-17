import { Card, CardHeader, CardTitle, CardSubtitle } from '../ui/Card'
import { ProgressBar } from '../ui/ProgressBar'
import { Badge } from '../ui/Badge'
import { categories, formatCurrency } from '../../data/mock'

export function SpendingCategories() {
  return (
    <Card variant="default" padding="lg" radius="lg" className="gap-5">
      <CardHeader>
        <div className="flex flex-col">
          <CardTitle>Spending by category</CardTitle>
          <CardSubtitle>May 1 – May 17</CardSubtitle>
        </div>
        <Badge variant="primary" size="md">This month</Badge>
      </CardHeader>

      <div className="flex flex-col gap-4">
        {categories.map((cat) => {
          const pct = Math.round((cat.spent / cat.budget) * 100)
          return (
            <div key={cat.id} className="flex flex-col gap-2">
              <div className="flex flex-row items-baseline justify-between gap-3">
                <span className="text-(length:--text-body-md) font-[var(--font-weight-medium)] text-text">
                  {cat.label}
                </span>
                <span className="text-(length:--text-body-sm) text-text-muted">
                  <span className="text-text font-[var(--font-weight-medium)]">
                    {formatCurrency(cat.spent)}
                  </span>{' '}
                  / {formatCurrency(cat.budget)}
                </span>
              </div>
              <ProgressBar value={pct} tone={cat.tone} size="md" />
            </div>
          )
        })}
      </div>
    </Card>
  )
}
