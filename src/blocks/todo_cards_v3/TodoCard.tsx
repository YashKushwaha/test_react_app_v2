import type { TodoUI } from "./types"
import { Card, CardContent } from "@/components/ui/card"

type TodoCardProps = {
  todo: TodoUI
}

export function TodoCard({ todo }: TodoCardProps) {
  return (
    <Card key={todo.id}>
      <CardContent>
        <p>ID: {todo.id}</p>
        <p>User: {todo.userId}</p>
        <p>Title: {todo.title}</p>
        <p>Status: {todo.status}</p>
      </CardContent>
    </Card>
  )
}
