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
    //      case '+':
    //         return state +10;
    //     case '-':
    //         return state -2;
    //      default:
    //         return state
    //  }
}

export default reducer;