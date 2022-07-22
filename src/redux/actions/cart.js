import { SET_PIZZA_CART } from "../constants";

export const setPizzaCart = (payload) => {
    return {
        type: SET_PIZZA_CART,
        payload
    }
}