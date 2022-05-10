import React, { useEffect } from 'react'

export default function CallbackChild({returnName}) {
    useEffect(() => {
        console.log('returnName was called!')
    }, [returnName]);
    return (
        <div id="name">{returnName ? returnName : ''}</div>
    )
}
