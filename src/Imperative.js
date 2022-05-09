import React, {useRef} from 'react'
import ImperativeChild from './ImperativeChild'

export default function Imperative() {
    const buttonRef = useRef(null);

  return (
    <div>
        <button onClick={()=>{buttonRef.current.alterToggle()}}>Parent</button>
        <ImperativeChild ref={buttonRef}/>
    </div>
  )
}
