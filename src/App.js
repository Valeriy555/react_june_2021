import {useReducer} from "react";
import ../''

const reducer = (state= {h:0, a:0, b:0, c:0},action) =>{
if (action.obj === '1' && action.diya === '+') {
    return {...state, h:state.h+10}
} else if (action.obj === '1' && action.diya === '-') {
    return {...state, h:state.h-2}
} else if (action.obj === '2' && action.diya === '+'){
    return {...state, a:state.a+2}
} else if (action.obj === '2' && action.diya === '-'){
    return {...state, a:state.a-2}
}else if (action.obj === '3' && action.diya === '+'){
    return {...state, b:state.b+5}
} else if (action.obj === '3' && action.diya === '-') {
    return {...state, b: state.b--}
}else if (action.obj === '4' && action.diya === '+'){
    return {...state, c:state.c++}
} else if (action.obj === '4' && action.diya === '-') {
    return {...state,c: state.c--}
}


    // switch (action) {
    //     case '+':
    //         return state +10;
    //     case '-':
    //         return state -2;
    //     default:
    //         return state
    // }
}

export default function App() {

    let [state,dispatch] = useReducer(reducer,{h:0, a:0, b:0, c:0});
    let {h, a, b, c} = state;
console.log(state)
    return (
        <div>
            <h2 >Homework</h2> <hr/>

            <h1> state1-{h}</h1> <hr/>
            <button onClick={() => dispatch({obj: '1', diya: '+'})}>plus 10</button>
            <button onClick={() => dispatch({obj: '1', diya: '-'})}>minus 2 </button>

            <h2>Classwork</h2> <hr/>

            <h1> state2-{a}</h1> <hr/>
            <button onClick={() => dispatch({obj: '2', diya: '+'})}>plus 2</button>
            <button onClick={() => dispatch({obj: '2', diya: '-'})}>minus 2</button>

            <h1> state3-{b}</h1> <hr/>
            <button onClick={() => dispatch({obj: '3', diya: '+'})}>plus 5</button>
            <button onClick={() => dispatch({obj: '3', diya: '-'})}>minus 1</button>

            <h1> state4-{c}</h1> <hr/>
            <button onClick={() => dispatch({obj: '4', diya: '+'})}>plus 1</button>
            <button onClick={() => dispatch({obj: '4', diya: '-'})}>minus 1</button>
        </div>
    );
}