import React, { useState } from 'react'

const Test3 = () => {
    const [name,setName] = useState();
    const [display,setdisplay] = useState();

    const changeName=(e)=>{
        setName(e.target.value);
        console.log(e.target.value);
        
    }

    const handleClick=()=>{
        setdisplay(name);
        setName('');
    }

    return (
        <div>
            <input placeholder='Enter the Name' value={name} onChange={changeName}></input>
            <button onClick={handleClick}>ChangeName</button>
            <h3>{display}</h3>
        </div>
    )
}

export default Test3;