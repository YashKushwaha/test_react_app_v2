import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LoginStatus() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="space-y-4">
      {loggedIn ? (
        <div>Welcome back 👋</div>
      ) : (
        <div>Please log in</div>
      )}

      <Button onClick={() => setLoggedIn(!loggedIn)}>
        Toggle
      </Button>
    </div>
  )
}
