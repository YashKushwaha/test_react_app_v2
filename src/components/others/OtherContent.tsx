import {Counter} from "@/components/others/Counter"
import {UserCard} from "@/components/others/UserCard"
import {LoginStatus} from "@/components/others/LoginStatus"


import {useState } from "react"

const items = ["Models", "Datasets", "Pipelines"]

function SidebarMenu() {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="p-2 hover:bg-muted rounded">
          - {item}
        </li>
      ))}
    </ul>
  )
}

function PromptInput() {
  const [prompt, setPrompt] = useState("")

  return (
    <div className="space-y-2">
      <input
        className="border p-2 w-full"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="text-sm text-muted-foreground">
        Length: {prompt.length}
      </div>
    </div>
  )
}

function InfoCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <InfoCard title="Users" description="1,234" />
      <InfoCard title="Latency" description="120ms" />
      <InfoCard title="Tokens Used" description="56k" />
    </div>
  )
}
const stats = [
  { title: "Users", description: "1,234" },
  { title: "Latency", description: "120ms" },
  { title: "Tokens Used", description: "56k" },
]

function Dashboard_v2() {
  return (

    <div className="grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <InfoCard
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}
import { Input } from "@/components/ui/input"

function NameInput() {
  const [name, setName] = useState("")

  return (
    <div className="space-y-2">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />

      <p>Hello, {name || "stranger"} 👋</p>
    </div>
  )
}


export function OtherContent(){
  return (        
        <>

          <Counter></Counter>
          <UserCard name="Alice" role="GenAI Engineer"></UserCard>
          <UserCard name="Alex" role="ML Engineer"></UserCard>
          <LoginStatus></LoginStatus>
          <SidebarMenu />
          <PromptInput></PromptInput>
          <Dashboard />
          <NameInput />
          <Dashboard_v2 />
        
        </>
  )
}