
import {Counter} from "@/components/counter"

function Header(){
  return (
      <header className="h-12 w-full border-b flex items-center px-4 border border-black bg-red-200">
        <div className="font-semibold">My App</div>
      </header>
  )
}

function Sidebar(){
  return (        
      <aside className="w-48 border-r p-4">
        Sidebar
      </aside>
  )
}

function MainContent(){
  return (        
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          Main Content
          <Counter></Counter>
        </main>
  )
}

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