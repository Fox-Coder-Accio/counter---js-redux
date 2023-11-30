import { INCREMENT,DECREMENT,RESET } from "../actions/actionTypes.js";



let initialState = 0 


// counterReducer()
//counterReducer(0,{type:INCREMENT}) =>

// counterReducer(0,{type:INCREMENT, value: 100})

function counterReducer(state=initialState, actions){
       switch(actions.type){
        case INCREMENT:  return state + actions.value
        case DECREMENT:  return state - 1
        case RESET:  return initialState
        default: return state
       }
}


export default counterReducer


// counterReducer(100, {type: INCREMENT})
// counterReducer(100, {type: DECREMENT})
// counterReducer(100, {type: RESET})









// function sum (a=10, b=20){
//     return a+b
// }

// sum(7,9)