import { ThemeProvider } from './lib/theme'
import { Sidebar } from './components/dashboard/Sidebar'
import { TopBar } from './components/dashboard/TopBar'
import { BalanceCard } from './components/dashboard/BalanceCard'
import { QuickActions } from './components/dashboard/QuickActions'
import { SpendingCategories } from './components/dashboard/SpendingCategories'
import { TransactionList } from './components/dashboard/TransactionList'

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-row min-h-screen w-full bg-background text-text">
        <Sidebar />
        <div className="flex flex-col grow min-w-0">
          <TopBar />
          <main className="flex flex-col grow gap-6 p-6 md:p-8 max-w-6xl w-full mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col gap-6 grow basis-0">
                <BalanceCard />
                <QuickActions />
                <SpendingCategories />
              </div>
              <div className="flex flex-col gap-6 grow basis-0">
                <TransactionList />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
