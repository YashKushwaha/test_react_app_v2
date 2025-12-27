import type  { todo_item } from "./types"

import { Card, CardContent } from "@/components/ui/card"

export function render_todo(todo_item: todo_item){

  return (
  <Card key = {todo_item.id}>
    <CardContent>
      <p>userId : {todo_item.userId}</p>
      <p>id : {todo_item.id}</p>
      <p>Title: {todo_item.title}</p>
      <p>Status : {todo_item.completed ? "Completed" : "Pending"}</p>
    </CardContent>
  </Card>
  )
}
