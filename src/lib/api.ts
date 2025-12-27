
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// src/lib/api.ts
export async function fetchDashboardStats() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
  //await delay(1000) // ⏱️ 1 second delay
  const res = await fetch("todos.json")

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data")
  }

  const data = await res.json()
  return data
}