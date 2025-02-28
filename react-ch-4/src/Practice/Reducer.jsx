import React, { useReducer } from 'react'

const reducer = (state, action) => {
    console.log(action);
    
    switch(action){
        case "incre":return state+1
        case "decre":return state-1
    }

}
const intitialstate = 0;




export default function Reducer() {

    const [counter, dispatch] = useReducer(reducer, intitialstate);
    return (

        <>
            {counter}
            <button onClick={()=>dispatch("incre")}>+</button>
            <button>-</button>
        </>
    )
}
