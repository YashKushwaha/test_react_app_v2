import './App.css'
import { Header } from './layout/Header'
import { Sidebar } from './layout/Sidebar'
import { MainContent } from './layout/MainContent'

export default function App() {
  return (
  <div className="flex-none">
      <Header></Header>
      
        <div className='flex'>       
            <Sidebar />
            <MainContent />
      </div>

  </div>


  )
}
