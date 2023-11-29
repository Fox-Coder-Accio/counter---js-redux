import store from "./redux/store.js";
import { increment,decrement,reset } from "./redux/actions/counterActions.js";

// store => getState(), dispatch(), 

console.log("line 6",store.getState())

// call certain actions:

store.dispatch(increment(1))
console.log("line 11",store.getState())

store.dispatch(increment(100))
console.log("line 14",store.getState())

store.dispatch(decrement())
console.log("line 17",store.getState())


store.dispatch(reset())
console.log("line 21",store.getState())



































// Insurance Company: 


// 1) Collection of all their polices  => store

// 2) Health insurance current policy => state

// 3) add_policy, remove_policy, update_policy  => actions

// 4) Complete process will be establised for the plocies  => reducers