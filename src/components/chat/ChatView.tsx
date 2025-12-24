
import { useState } from "react"
import { ChatInput } from "@/components/chat/ChatInput"

type Message = {
  role: string
  content: string
}

function renderMessage(msg: Message, index: number) {
  const isUser = msg.role === "user"

  return (
    <div
      key={index}
      className={`max-w-[70%] rounded-lg px-4 py-2 text-sm ${
        isUser
          ? "self-end bg-blue-500 text-white"
          : "self-start bg-gray-200"
      }`}
    >
      {msg.content}
    </div>
  )
}


export function ChatView() {
  const [messages, setMessages] = useState<Message[]>([])

  function handleSend(text: string) {
    const userMessage: Message = {
      role: "user",
      content: text,
    }

    const mockResponse: Message = {
      role: "assistant",
      content: text.toUpperCase(), // mock LLM
    }

    setMessages((prev) => [...prev, userMessage, mockResponse])
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat history */}
      <div className="flex-1 overflow-auto p-4">
        <div className="flex flex-col gap-3">
          {messages.map(renderMessage)}
        </div>
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  )
}
