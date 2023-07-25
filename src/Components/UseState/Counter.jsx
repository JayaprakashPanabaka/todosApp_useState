import { useState } from "react";
import './UseState.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const onCount = () => {
        setCount(prevState=> prevState+1)
        setCount(prevState=> prevState+1)
    }

    return(
        <div className="bg-container">
            <h1>Counter</h1>
            <p>Counts <span>{count}</span> times</p>
            <button className="btn" onClick={onCount}>Count</button>
        </div>
    )
}

export default Counter;













