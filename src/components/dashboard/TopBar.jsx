import { Search, Bell } from 'lucide-react'
import { IconButton } from '../ui/IconButton'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Avatar } from '../ui/Avatar'
import { account } from '../../data/mock'

export function TopBar() {
  return (
    <header className="flex flex-row items-center gap-4 h-16 px-6 border-b border-border bg-surface">
      <div className="flex flex-col grow">
        <span className="text-(length:--text-label) uppercase tracking-[var(--tracking-label)] text-text-subtle">
          Good morning
        </span>
        <span className="text-(length:--text-heading-md) font-(--font-display) font-[var(--font-weight-semibold)] tracking-[var(--tracking-heading)] text-text">
          {account.ownerName.split(' ')[0]}
        </span>
      </div>

      <div className="hidden sm:flex flex-row items-center gap-2 h-10 px-3 w-72 rounded-(--radius-md) border border-border bg-surface-muted text-text-muted">
        <Search className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search transactions, merchants…"
          className="flex grow bg-transparent outline-none text-(length:--text-body-sm) text-text placeholder:text-text-subtle"
        />
      </div>

      <div className="flex flex-row items-center gap-2">
        <IconButton variant="secondary" size="md" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </IconButton>
        <ThemeToggle />
        <Avatar name={account.ownerName} size="md" tone="primary" />
      </div>
    </header>
  )
}
