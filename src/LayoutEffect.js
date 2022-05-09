import { useLayoutEffect, useRef, useEffect } from 'react'

const myStyle = {
    width: '400px',
    height: '100px'

}

export default function LayoutEff() {

    const myInput = useRef(null);

    useEffect(() => {
     
        myInput.current.value ='Hello';
    }, []); //called when initial render done


    useLayoutEffect(() => {
        console.log('use layout effect');

        console.log('use effect', myInput.current.value);
        myInput.current.value ='SD';

    }, []); //called when component is created

    return (
        <div className="App">
            <input ref={myInput} value="Sasha" style={myStyle}></input>
        </div>
    )
}
