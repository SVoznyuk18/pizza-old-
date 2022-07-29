import { SET_PIZZA_CART, UPDATE_PIZZA_CART_ITEM, INC_PIZZA_AMOUNT, DEC_PIZZA_AMOUNT, DELETE_PIZZA_ITEM} from "../constants";

export const setPizzaCart = (payload) => {
    return {
        type: SET_PIZZA_CART,
        payload
    }
}

export const updatePizzaCartItem = (payload) => {
    return {
        type: UPDATE_PIZZA_CART_ITEM,
        payload
    }
}

export const incPizzaAmount = (payload) => {
    return {
        type: INC_PIZZA_AMOUNT,
        payload
    }
}

export const decPizzaAmount = (payload) => {
    return {
        type: DEC_PIZZA_AMOUNT,
        payload
    }
}

export const deletePizzaItem = (payload) => {
    return {
        type: DELETE_PIZZA_ITEM,
        payload
    }
}