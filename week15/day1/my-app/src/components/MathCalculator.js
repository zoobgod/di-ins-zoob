import {useReducer} from 'react'
const initState = {
    result: 0,
    arr: [{id:1}, {id:2}, {id:3}]
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return {...state, result: state.result + action.payload*action.num}
        case 'MINUS1':
            return {...state, result: state.result - action.payload}
        case 'DIVIDEBYTWO':
            return {...state, result: state.result / 2}
        case 'MULTIPLYBYTWO':
            return {...state, result: state.result * 2}
        default:
            return state
    }
}
const MathCalc = (props) => {
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state)
    return(
        <>
        <h2>Simple Calc</h2>
        Result: {state.result}
        <button onClick={()=> dispatch({type:'ADD', payload:5, num:10})}>Add </button>
        <button onClick={()=> dispatch({type:'MINUS1', payload:5})}>Minus1</button>
        <button>DivideByTwo</button>
        <button>MultiplyByTwo</button>
      
        </>


    )
}

export default MathCalc