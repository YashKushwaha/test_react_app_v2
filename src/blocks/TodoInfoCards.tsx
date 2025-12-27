import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type todo_item = {
  userId: string
  id: string | number
  title?: string
  completed: boolean
}
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
// src/lib/api.ts
async function fetchDashboardStats() {
  //const res = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
  await delay(1000) // ⏱️ 1 second delay
  const res = await fetch("todos.json")

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data")
  }

  const data = await res.json()
  return data
}

function render_todo(todo_item: todo_item){
  setTimeout(() => {
      console.log("Sleep");
  }, 10000);

  return (
  <Card key = {todo_item.id}>
    <CardContent>
      <p>userId : {todo_item.userId}</p>
      <p>id : {todo_item.id}</p>
      <p>title: {todo_item.title}</p>
      <p>completed : {todo_item.completed ? "Yes" : "No"}</p>
    </CardContent>
  </Card>
  )
}
import { Input } from "@/components/ui/input"

export function FilterInput(){
  const [title, setTitle] = useState("")
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input value = {title} 
        onChange={(e)=> setTitle(e.target.value)}
        placeholder = "Search record...."/>
      <Button className="text-violet-200" type="submit" 
        onClick={()=> setTitle("")}
        variant="outline" >
        Clear
      </Button>
    </div>
  )
}

function filter_by_title(record: todo_item, title:string){
  return String(record.title).toLowerCase().includes(title)
}

export function TodoInfoCards() {
  const [data, setData] = useState([])
  // fetchDashboardStats().then(dataList => setData(dataList));
  useEffect(() => {
    fetchDashboardStats()
      .then(setData)
      .catch(() => console.log("Failed to load data"))
      .finally(() => console.log(false))
  }, [])
  const title = "culpa";
  const filtered_data = data.filter(record => filter_by_title(record, title));
  console.log(filtered_data);
  return ( 
    <>
      <FilterInput />
      <div className="max-h-[calc(100vh-3rem)] w-full overflow-y-auto p-4 space-y-4">
        {filtered_data.map(render_todo)}
      </div>
    </>
    )
}