import { useState, useEffect, useReducer } from "react"
import {fetchDashboardStats} from "@/lib/api"

import { render_todo } from "./render"
import {filter_using_reducer } from "./filter"
import { FilterInput } from "./FilterInput"

import type  {FilterState, FilterAction} from "./types"

const initialFilterState: FilterState = {
  search: "",
  userId: "all",
  completed: "all",
}



function filterReducer(
    state: FilterState,
    action: FilterAction
  ): FilterState {
    switch (action.type) {
      case "SET_SEARCH":
        return { ...state, search: action.payload }

      case "SET_USER":
        return { ...state, userId: action.payload }

      case "SET_COMPLETED":
        return { ...state, completed: action.payload }

      case "RESET":
        return initialFilterState

      default:
        return state
    }
  }



export function TodoInfoCards() {
  const [data, setData] = useState([])
  const [filters, dispatch] = useReducer(
            filterReducer,
            initialFilterState
          )
  function setTitle(value: string) {
    dispatch({ type: "SET_SEARCH", payload: value })
  }
  
  function setStatus(value: "all" | "Pending" | "Completed") {
    dispatch({ type: "SET_COMPLETED", payload: value })
  }
  
  function resetFilters(){
    dispatch({ type: "RESET"})
  }

  // fetchDashboardStats().then(dataList => setData(dataList));
  useEffect(() => {
    fetchDashboardStats()
      .then(setData)
      .catch(() => console.log("Failed to load data"))
      .finally(() => console.log(false))
  }, [])
  // const title = "culpa";
  const filtered_data = data.filter(record => filter_using_reducer(record, filters));
  console.log(filtered_data);

  return ( 
    <>
      <FilterInput title={filters.search} setTitle = {setTitle}
        status={filters.completed} setStatus = {setStatus}
        resetFilters = {resetFilters}/>
      <div className="max-h-[calc(100vh-3rem)] w-full overflow-y-auto p-4 space-y-4">
        {filtered_data.map(render_todo)}
      </div>
    </>
    )
}