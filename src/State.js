import './App.css';
import { React, useState } from 'react'

export default function State() {

    const [currentNum, setCurrentNum] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);
    function addOne() {
        setCurrentNum(currentNum + 1);
    }


    function updateInputValue(e) {
        setInputValue(e.target.value);
    }

    return (
        <>
            <h1>{currentNum}</h1>
            <button onClick={addOne}>Add 1</button><br /><br /><br />
            <input type="text" placeholder='enter something' onChange={updateInputValue} />
            <br />
            {inputValue}

            <br /> <br /> <br />

            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count + 1);
                setShowText(showText);
            }}>
                Click Here
            </button>

            {showText && <p>This is a text</p>}

        </>
    );
}
