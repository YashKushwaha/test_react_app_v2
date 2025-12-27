import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CounterNTodo } from './blocks/CounterNTodo'
import { Counter } from "@/components/Counter"
import {AppLayout} from '@/layout/AppLayout'
import { TodoList } from "@/components/TodoList"
import { TodoInfoCards } from './blocks/todo_card_info_cards_with_reducers/TodoInfoCards'


export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<CounterNTodo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/info_cards" element={<TodoInfoCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
