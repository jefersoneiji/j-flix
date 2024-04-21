import { useState } from "react"
import { Link } from "react-router-dom"

export const First = () => {
    const [count, setCount] = useState(0)
    const onIncrease = () => setCount(prev => prev + 1)

    return (
        <div>
            <button name="increase" onClick={onIncrease}>increase counter</button>
            <span>count is {count}</span>
            <Link to='/second' >Navigate to page 2</Link>
        </div>
    )
}