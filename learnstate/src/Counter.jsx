import { useState } from "react";

export default function Counter() {
    // let count = 0;
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

    const handleReset = () => {
        setCount(0);
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick ={handleDecrement}>-</button>
            <br />
            <br />
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}