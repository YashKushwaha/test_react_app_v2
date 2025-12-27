import { useState, useEffect } from "react"
import {fetchDashboardStats} from "@/lib/api"

import { render_todo } from "./render"
import { filter_by_title } from "./filter"
import { FilterInput } from "./FilterInput"

export function TodoInfoCards() {
  const [data, setData] = useState([])
  const [filter_word, set_filter_word] = useState("")
  
  // fetchDashboardStats().then(dataList => setData(dataList));
  useEffect(() => {
    fetchDashboardStats()
      .then(setData)
      .catch(() => console.log("Failed to load data"))
      .finally(() => console.log(false))
  }, [])
  // const title = "culpa";
  const filtered_data = data.filter(record => filter_by_title(record, filter_word));
  console.log(filtered_data);

  function onChange(value:string){
    set_filter_word(value);
  }

  return ( 
    <>
      <FilterInput onChange = {onChange}/>
      <div className="max-h-[calc(100vh-3rem)] w-full overflow-y-auto p-4 space-y-4">
        {filtered_data.map(render_todo)}
      </div>
    </>
    )
}