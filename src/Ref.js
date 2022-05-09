import React, { useRef, useState } from 'react'

export default function Ref() {

    const myInput = useRef(null);
    const [name, setName] = useState('Sasha');

    const updateName = () => {
        console.log(myInput.current.value)
        
        setName(myInput.current.value);
        myInput.current.focus();
        myInput.current.value = '';

    }

    return (
        <div>
            <h1>{name}</h1>
            <input ref={myInput} type='text' placeholder='Ex...' />
            <button onClick={updateName}>Change Name</button>
        </div>
    )
}
