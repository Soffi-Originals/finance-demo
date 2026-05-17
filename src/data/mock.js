export const account = {
  ownerName: 'Alex Morgan',
  ownerEmail: 'alex@example.com',
  cardLast4: '4821',
  balance: 12480.67,
  monthlyIncome: 7250.0,
  monthlySpend: 4318.42,
  currency: 'USD',
}

export const quickActions = [
  { id: 'send', label: 'Send', tone: 'primary' },
  { id: 'request', label: 'Request', tone: 'soft' },
  { id: 'pay', label: 'Pay bill', tone: 'soft' },
  { id: 'topup', label: 'Top up', tone: 'soft' },
]

export const categories = [
  { id: 'groceries', label: 'Groceries', spent: 412.5, budget: 600, tone: 'primary' },
  { id: 'dining', label: 'Dining out', spent: 285.2, budget: 350, tone: 'warning' },
  { id: 'transport', label: 'Transport', spent: 142.0, budget: 250, tone: 'info' },
  { id: 'subscriptions', label: 'Subscriptions', spent: 89.97, budget: 120, tone: 'success' },
]

export const transactions = [
  {
    id: 't1',
    counterparty: 'Whole Foods Market',
    category: 'Groceries',
    categoryTone: 'success',
    date: 'Today, 10:32',
    amount: -82.4,
  },
  {
    id: 't2',
    counterparty: 'Payroll · Acme Co.',
    category: 'Income',
    categoryTone: 'primary',
    date: 'Today, 08:00',
    amount: 3625.0,
  },
  {
    id: 't3',
    counterparty: 'Uber',
    category: 'Transport',
    categoryTone: 'info',
    date: 'Yesterday, 19:15',
    amount: -18.5,
  },
  {
    id: 't4',
    counterparty: 'Spotify',
    category: 'Subscriptions',
    categoryTone: 'warning',
    date: 'Yesterday, 06:00',
    amount: -11.99,
  },
  {
    id: 't5',
    counterparty: 'Nori Sushi',
    category: 'Dining',
    categoryTone: 'warning',
    date: 'May 14',
    amount: -46.2,
  },
  {
    id: 't6',
    counterparty: 'Transfer to Savings',
    category: 'Transfer',
    categoryTone: 'neutral',
    date: 'May 13',
    amount: -500.0,
  },
]

export const navItems = [
  { id: 'overview', label: 'Overview', active: true },
  { id: 'transactions', label: 'Transactions' },
  { id: 'cards', label: 'Cards' },
  { id: 'budgets', label: 'Budgets' },
  { id: 'goals', label: 'Goals' },
  { id: 'settings', label: 'Settings' },
]

export function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value)
}
