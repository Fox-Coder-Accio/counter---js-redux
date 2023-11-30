import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer.js";


const store =   createStore(counterReducer)

export default store



// dispatch({type:INCREMENT, value: 100})

//counterReducer(0, {type:INCREMENT, value: 100})




// dispatch({type:INCREMENT})

// counterReducer(0,{type:INCREMENT}) => 1


// store => without any actions

// store =>  counterReducer( ) => 0









// when store runs for first time: 

//  counterReducer() => 0 

// store => 0





