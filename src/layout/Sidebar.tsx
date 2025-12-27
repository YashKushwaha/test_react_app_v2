import { Link } from "react-router-dom"

export function Sidebar(){
  return (        
      <aside className="w-48 border-r p-4 flex flex-col gap-2">
        <Link className='text-xl' to="/">Dashboard</Link>
        <Link className='text-xl' to="/todo">To Do App</Link>
        <Link className='text-xl' to="/counter">Counter App</Link>
      </aside>
  )
}