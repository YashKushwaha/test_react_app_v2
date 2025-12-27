import { useState } from "react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusFilter } from "./StatusFilter"

import type  {FilterInputProps } from "./types"

export function FilterInput({onChange}: FilterInputProps){
  const [title, setTitle] = useState("")
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      
      <Input value = {title} 
        onChange={(e)=> {setTitle(e.target.value); onChange(e.target.value);}}
        placeholder = "Search record...."/>
      
      <Button className="text-violet-200" type="submit" 
        onClick={()=> setTitle("")}
        variant="outline" >
        Clear
      </Button>

      <StatusFilter value = {"Pending"} onChange={onChange}/>
    
    </div>
  )
}
