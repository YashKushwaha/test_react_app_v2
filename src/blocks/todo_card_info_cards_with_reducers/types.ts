export type todo_item = {
  userId: string
  id: string | number
  title?: string
  completed: boolean
}

export type FilterAction =
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_USER"; payload: string }
  | { type: "SET_COMPLETED"; payload: "all" | "Pending" | "Completed" }
  | { type: "RESET" }

export type FilterInputProps_old = {
  onChange: (value: string) => void
}

export type FilterInputProps = {
  dispatch: React.Dispatch<FilterAction>
}

export type FilterState = {
  search: string
  userId: string
  completed: "all" | "Pending" | "Completed"
}