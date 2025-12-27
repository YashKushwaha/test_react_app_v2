

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  value: string
  setStatus:  (value:  "all" | "Pending" | "Completed") => void
}

export function StatusFilter({ value, setStatus }: Props) {
  return (
    <Select value={value} onValueChange={setStatus}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter status" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="Completed">Completed</SelectItem>
        <SelectItem value="Pending">Pending</SelectItem>
      </SelectContent>
    </Select>
  )
}
