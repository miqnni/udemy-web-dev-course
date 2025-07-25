import React, { useState } from "react";

const initialCounterValue = 3;

function App() {
    // Destructuring an array returned by useState()
    const [count, setCount] = useState(initialCounterValue);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default App;
