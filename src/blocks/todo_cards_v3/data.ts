import type { TodoRaw, TodoUI } from "./types"

function transformTodo(todo: TodoRaw): TodoUI {
  return {
    userId: todo.userId,
    id: todo.id,
    title: todo.title,
    status: todo.completed ? "Completed" : "Pending",
  }
}

function transformTodos(todos: TodoRaw[]): TodoUI[] {
  return todos.map(transformTodo)
}

export async function fetchDashboardStats(): Promise<TodoUI[]> {
  const res = await fetch("todos.json")

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data")
  }

  const data: TodoRaw[] = await res.json()
  return transformTodos(data)
}
