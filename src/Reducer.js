import React from 'react'

import { useState, useReducer } from 'react';

export default function Reducer() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "Add":
                return { count: state.count + 1, showText: state.showText }
            case "toggleShowText":
                return { count: state.count, showText: !state.showText }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true }); 
    //complex object updated every time dispatch is used.


    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "Add" });
                dispatch({ type: "toggleShowText" });
            }
            }>
                Click Here
            </button>

            {state.showText && <p>This is a text</p>}

        </>
    );
}
