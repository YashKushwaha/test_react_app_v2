
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { MainContent } from './MainContent'

export function AppLayout() {
  return (
  <div className="flex-none">
      <Header />
      <div className='flex'>       
        <Sidebar />
        <MainContent />
      </div>
  </div>
  )
}
