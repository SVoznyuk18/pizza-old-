import { SET_PIZZA, SET_PIZZA_LOADING, SET_PIZZA_ERROR } from "../constants";

const initialState = {
    pizza: [],
    pizzaLoading: false,
    pizzaError: false
}

const pizza = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA:
            return {
                ...state,
                pizza: action.payload
            }
        case SET_PIZZA_LOADING:
            return {
                ...state,
                pizzaLoading: action.payload
            }
        case SET_PIZZA_ERROR:
            return {
                ...state,
                pizzaError: action.type
            }
        default:
            return state
    }
}

export default pizza;