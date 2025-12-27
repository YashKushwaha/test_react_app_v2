import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


function renderTodo(id:number, todo:string){
return (
    <div key={id}>{todo}</div>
)

}

type TodoList = {
    todos: string[]
}

export function TodoListView({todos}: TodoList){
    //const todos = Array.from({ length: 5 }, (_, i) => `Todo ${i}`)
    return( <div>
        {todos.map((todo, index) => renderTodo(index, todo))}
        </div>)
}
type TodoInputProps = {
  onAdd: (todo: string) => void
}

export function TodoInput({onAdd}: TodoInputProps){
    const [todo, setTodo] = useState("")

    function add_to_list(todo:string){
        onAdd(todo);
        setTodo("");
    }

    return (
        <div className="flex w-full max-w-sm items-center gap-2">
        <Input value = {todo} onChange={(e) => setTodo(e.target.value)}></Input>
        <Button onClick={() => add_to_list(todo)}> Add </Button>
        </div>
    )
}

export function TodoList(){
    const init = Array.from({ length: 5 }, (_, i) => `Todo ${i+10}`)
    const [todos, setTodos] = useState(init)

    function onAdd(todo: string){
        setTodos((prev) => [...prev, todo]);
        console.log(todo.toUpperCase());
    }

     return (
    <div>
        <TodoInput onAdd = {onAdd}></TodoInput>
        <TodoListView  todos = {todos}/>
    </div>
    )
}