import { SET_PIZZA_CART, UPDATE_PIZZA_CART_ITEM, INC_PIZZA_AMOUNT, DEC_PIZZA_AMOUNT, DELETE_PIZZA_ITEM } from "../constants";

const initialState = {
    cart: []
}
const cart = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case UPDATE_PIZZA_CART_ITEM:
            const newItemCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            });
            return {
                ...state,
                cart: newItemCart
            }
        case INC_PIZZA_AMOUNT:
            const newItemInc = state.cart.map((item, index) => {
                if (item.id === action.payload.id) {
                    return { ...item, amountPizzas: action.payload.amountPizzas }
                } else {
                    return item
                }
            })
            return {
                ...state,
                cart: newItemInc
            }
        case DEC_PIZZA_AMOUNT:
            const newItemDec = state.cart.map((item, index) => {
                if (item.id === action.payload.id) {
                    return { ...item, amountPizzas: action.payload.amountPizzas }
                } else {
                    return item
                }
            })
            return {
                ...state,
                cart: newItemDec
            }
        case DELETE_PIZZA_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cart;



