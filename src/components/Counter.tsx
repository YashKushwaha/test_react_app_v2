import { useState } from "react"
import { Button } from "./ui/button"

export function Counter() {
    
    const [count, setCount] = useState(10)
    return (
        <>
    <div>{count}</div>
    <Button onClick={() => setCount(count+1)}>
        +
    </Button>
    </>
    )
}