
export type TodoRaw = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type TodoUI = {
  userId: number
  id: number
  title: string
  status: "Completed" | "Pending" | null
}

export type Filters = {
  title: string
  users: number[] | null        // selected userIds
  status: "Pending" | "Completed" | null
  idRange: [number, number] | null
}
