import { INCREMENT,DECREMENT,RESET } from "./actionTypes.js";

// action creators => are functions which return actions 

// actions as objects


export const increment = (value) => {
      return({
        type: INCREMENT,
        value: value
      })
}

export const decrement = () => {
    return({
        type: DECREMENT
    })
}

export const reset = () => {
    return({
        type: RESET
    })
}