import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusFilter } from "./StatusFilter"

// import type  {FilterInputProps } from "./types"

type FilterInputProps ={
  title : string
  setTitle: (value: string) => void
  status: "all" | "Pending" | "Completed"
  setStatus:  (value:  "all" | "Pending" | "Completed") => void
  resetFilters:  () => void
}


export function FilterInput({title, setTitle, status, setStatus, resetFilters}: FilterInputProps){
  // const [title, setTitle] = useState("")
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      
      <Input value = {title} 
        onChange={(e)=> setTitle(e.target.value)}
        placeholder = "Search record...."/>
      
      <StatusFilter value = {status} setStatus = {setStatus}/>

      <Button className="text-violet-200" type="submit" 
        onClick={()=> resetFilters()}
        variant="outline" >
        Clear Filter
      </Button>

    </div>
  )
}
