import type  { todo_item,  FilterState} from "./types"

export function filter_by_title(record: todo_item, title:string){
  return String(record.title).toLowerCase().includes(title)
}

export function filter_using_reducer(todo: todo_item, filters: FilterState){
  if (
      filters.search &&
      !todo.title?.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false
    }

    if (filters.userId !== "all" && String(todo.userId) !== String(filters.userId)) {
      return false
    }

    if (filters.completed !== "all") {
      const isDone = filters.completed === "Completed"
      if (todo.completed !== isDone) return false
    }

  return true
}
