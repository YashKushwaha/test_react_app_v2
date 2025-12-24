
import { ChatView } from "@/components/chat/ChatView"

export function MainContent(){

  return (
    <main className="flex flex-col flex-1 bg-gray-100">
      {/* Chat messages area */}
      <div className="flex-1 overflow-auto p-6">
        <ChatView />
      </div>
    </main>
  )
}