export type todo_item = {
  userId: string
  id: string | number
  title?: string
  completed: boolean
}

export type FilterInputProps = {
  onChange: (value: string) => void
}