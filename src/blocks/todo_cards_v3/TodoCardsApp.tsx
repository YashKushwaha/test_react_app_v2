import { useState, useEffect, useReducer } from "react"

import { fetchDashboardStats } from "./data"
import {TodoCard} from "./TodoCard" 
import type { TodoUI } from "./types"

import { Input } from "@/components/ui/input"
import { filter_todos } from "./filter"

import { Slider } from "@/components/ui/slider"

const initial_filter = {title : "", users : [], status: null, idRange: null}

function change_filter(state, action){
    if (action.type === 'SET_TITLE'){
        return {...state, title: action.payload}
    }

    if (action.type === 'SET_ID_RANGE'){
        return {...state, idRange: action.payload}
    }

    if (action.type === 'SET_COMPLETION_STATUS'){
        return {...state, status: action.payload}
    }

        if (action.type === 'SET_USERID'){
        return {...state, status: action.payload}
    }


    return state
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export function TodoCardsApp(){
    const [todos, setTodos] = useState<TodoUI[]>([])
    
    useEffect(() => {
        fetchDashboardStats()
          .then(setTodos)
          .catch(() => console.log("Failed to load data"))
          .finally(() => console.log(false))
      }, [])

    const id_list = [...new Set(todos.map(t => t.id))]
    const user_list = [...new Set(todos.map(t => t.userId))]
    const status_list = [...new Set(todos.map(t => t.status))]
    // console.log(user_list, status_list);

    const [filterState, dispatch] = useReducer(change_filter, initial_filter)

    const sliderValue: [number, number] =
        filterState.idRange ?? [Math.min(...id_list), Math.max(...id_list)]

    const filtered_todo = todos.filter((todo)=> filter_todos(todo, filterState))
    return (
    <>
    <Input type="text" placeholder="Search Title" 
           value = {filterState.title}
           onChange={e=> dispatch({type: "SET_TITLE", payload: e.target.value}) } />
    
    <Select
        value={filterState.userId === null ? "ALL" : String(filterState.userId)}
        onValueChange={(value) => 
            dispatch({type: "SET_USERID", payload:value==="ALL"? null: Number(value) })}
        >
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Users" />
        </SelectTrigger>
        <SelectContent>
            {["ALL" , ...user_list].map(value => 
                <SelectItem key = {value} value={value}>{value}</SelectItem>)}
        </SelectContent>
    </Select>

    <Select
            value={filterState.status === null ? "ALL": filterState.status} 
            onValueChange={(value) => 
                dispatch({type: "SET_COMPLETION_STATUS", 
                    payload:value === "ALL" ? null : value })}>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
            {[ "ALL",...status_list].map(value => 
            <SelectItem key = {value} value={value}>
                {value}
            </SelectItem>)}
        </SelectContent>
    </Select>

      <Slider
        value={sliderValue}
        min={Math.min(...id_list)}
        max={Math.max(...id_list)}
        step={1}
        onValueChange={(value) => {dispatch({type: "SET_ID_RANGE", payload:value as [number, number]})}}
      />

        <div className="max-h-[calc(100vh-3rem)] w-full overflow-y-auto p-4 space-y-4">
            {  filtered_todo.map(todo => <TodoCard key={todo.id} todo={todo}></TodoCard>)}
        </div>
    </>)
}