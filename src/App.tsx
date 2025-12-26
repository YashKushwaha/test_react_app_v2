import { MainContent } from "./layout/MainContent"
import { Sidebar } from "./layout/Sidebar"
import { Header } from "./layout/Header"

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
          {/* Top Bar */}

      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App