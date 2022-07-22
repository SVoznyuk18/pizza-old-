import { SET_PIZZA_CART } from "../constants";

const initialState = {
    cart: []
}
const cart = (state = initialState, action) => {
    switch(action.type) {
        case SET_PIZZA_CART:
            return{
                ...state,
                cart: [...state.cart, action.payload], 
            }
        default:
            return state;
    }
}

export default cart;