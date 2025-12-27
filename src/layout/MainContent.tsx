import { Outlet } from "react-router-dom"

export function MainContent(){
  return (    
    <main className="flex-1 overflow-hidden"> 
    <Outlet />
    </main>   
  )
}
