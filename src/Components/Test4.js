import React, { useEffect, useState } from 'react'

const Test4 = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(false);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, [count])

    return (

        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => { setState(!state) }}>Start/Stop</button>
        </div>
    )
}

export default Test4