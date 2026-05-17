import { Send, HandCoins, Receipt, Plus } from 'lucide-react'
import { Button } from '../ui/Button'
import { quickActions } from '../../data/mock'

const iconMap = {
  send: Send,
  request: HandCoins,
  pay: Receipt,
  topup: Plus,
}

export function QuickActions() {
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {quickActions.map((action) => {
        const Icon = iconMap[action.id]
        return (
          <Button
            key={action.id}
            variant={action.tone === 'primary' ? 'primary' : 'soft'}
            size="md"
            className="grow basis-32"
          >
            <Icon className="h-4 w-4" />
            <span>{action.label}</span>
          </Button>
        )
      })}
    </div>
  )
}
