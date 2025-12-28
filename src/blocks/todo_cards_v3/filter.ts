

import type { TodoUI, Filters } from "./types"

export function filter_todos(todo:TodoUI, filters: Filters){
    if (filters.title && 
        !todo.title.toLowerCase().includes(filters.title.toLowerCase())){
        return false}
    
    if (filters.users 
        && filters.users.length > 0
        && !filters.users.includes(todo.userId)){
        return false}
    
    if (filters.status && 
        !(filters.status === todo.status)){
        return false}

    if (filters.idRange  
        && (todo.id < filters.idRange[0]  || todo.id > filters.idRange[1])
        ){return false}
        
    return true
}