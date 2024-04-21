import { useState } from "react"

export const First = () => {
    const [count, setCount] = useState(0)
    const onIncrease = () => setCount(prev => prev + 1)
 
    return (
        <div>
            <button name="increase" onClick={onIncrease}>increase counter</button>
            <span>count is {count}</span>
        </div>
    )
}