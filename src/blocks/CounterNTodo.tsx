import { Counter } from "@/components/Counter"
import { TodoList } from "@/components/TodoList"
import { Separator } from "@/components/ui/separator"


export function CounterNTodo(){
    return (
        <div>
            <Counter />
            <Separator />
            <TodoList></TodoList>
        </div>
    )
}