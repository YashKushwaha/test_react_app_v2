export  function UserCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="border p-4 rounded-lg">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-muted-foreground">{role}</div>
    </div>
  )
}