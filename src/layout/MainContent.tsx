import { Counter } from "@/components/Counter"
import { Separator } from "@/components/ui/separator"
import { TodoList } from "@/components/TodoList"

export function MainContent(){
  return (        
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
            <Counter init = {10} />
            <Separator />
            <Counter init = {20} label = "Count"/>
            <Separator />
            <TodoList/>
        </main>
  )
}