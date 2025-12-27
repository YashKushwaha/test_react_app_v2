import type  { todo_item } from "./types"

export function filter_by_title(record: todo_item, title:string){
  return String(record.title).toLowerCase().includes(title)
}