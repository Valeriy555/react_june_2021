import {useReducer} from "react";
import './App.css'
import reducer from "./redusers/Reduser";


export default function App() {

    let [state,dispatch] = useReducer(reducer,{h:0, a:0, b:0, c:0});
    let {h, a, b, c} = state;
console.log(state)
    return (
        <div>
            <h2 >Homework</h2>

            <h1> state1-{h}</h1>
            <button onClick={() => dispatch({obj: '1', diya: '+'})}>plus 10</button>
            <button onClick={() => dispatch({obj: '1', diya: '-'})}>minus 2 </button>
            <hr/>
            <h2>Classwork</h2>

            <h1> state2-{a}</h1>
            <button onClick={() => dispatch({obj: '2', diya: '+'})}>plus 2</button>
            <button onClick={() => dispatch({obj: '2', diya: '-'})}>minus 2</button>
            <hr/>
            <h1> state3-{b}</h1>
            <button onClick={() => dispatch({obj: '3', diya: '+'})}>plus 5</button>
            <button onClick={() => dispatch({obj: '3', diya: '-'})}>minus 1</button>
            <hr/>
            <h1> state4-{c}</h1>
            <button onClick={() => dispatch({obj: '4', diya: '+'})}>plus 1</button>
            <button onClick={() => dispatch({obj: '4', diya: '-'})}>minus 1</button>
        </div>
    );
}