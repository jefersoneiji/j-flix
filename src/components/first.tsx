import { useState } from "react"
import { Link } from "react-router-dom"

import '../css/_grid.scss'

export const First = () => {
    const [count, setCount] = useState(0)
    const onIncrease = () => setCount(prev => prev + 1)

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <button name="increase" onClick={onIncrease}>increase counter</button>
                    <span>count is {count}</span>
                </div>
                <div className="col-6">
                    <Link to='/second' >Navigate to page 2</Link>
                </div>
            </div>
        </div>
    )
}