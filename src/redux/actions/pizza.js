import { GET_PIZZA, SET_PIZZA, SET_PIZZA_LOADING, SET_PIZZA_ERROR } from "../constants"

export const getPizza = () => {
    return {
        type: GET_PIZZA
    }
}

export const setPizza = (payload) => {
    return {
        type: SET_PIZZA,
        payload
    }
}

export const setPizzaLoading = (payload) => {
    return {
        type: SET_PIZZA_LOADING,
        payload
    }
}

export const setPizzaError = (payload) => {
    return {
        type: SET_PIZZA_ERROR,
        payload
    }
}

