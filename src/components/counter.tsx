import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Counter() {
  const [count, setCount] = useState(20)

  return (
    <div className="space-y-4">
      <div className="text-xl">Count: {count}</div>

      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  )
}
