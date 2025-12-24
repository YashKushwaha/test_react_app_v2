
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [value, setValue] = useState("")

  function handleSend() {
    if (!value.trim()) return
    onSend(value)
    setValue("")
  }

  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-2 items-end">
        <Textarea
          placeholder="Type your message..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={1}
          className="resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()
              handleSend()
            }
          }}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  )
}
