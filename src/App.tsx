import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CounterNTodo } from './blocks/CounterNTodo'
import { Counter } from "@/components/Counter"
import {AppLayout} from '@/layout/AppLayout'
import { TodoList } from "@/components/TodoList"
export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<CounterNTodo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
