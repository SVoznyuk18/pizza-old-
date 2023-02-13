import * as Types from '../../configs/constants';

const initialState = {
    cart: [],
    totalPrice: 0,
    totalAmount: 0
}

const addPizzaToCartSuccess = (state, action) => {
    const cart = state.cart;
    let totalPrice = state.totalPrice;
    let totalAmount = state.totalAmount;

    totalPrice = cart.reduce((accum, item) => {
        return accum + item.price * item.amountPizzas;
    }, 0);

    totalAmount = cart.reduce((accum, item) => {
        return accum + item.amountPizzas;
    }, 0);

    return {
        ...state,
        cart: [...state.cart, action.payload],
        totalPrice,
        totalAmount
    }
};

const increasePizzaAmountSuccess = (state, action) => {
    const cart = state.cart;
    let totalPrice = state.totalPrice;
    let totalAmount = state.totalAmount;
    const index = cart.findIndex(item => item.id === action.payload);

    if (index !== -1) cart[index].amountPizzas += 1;

    totalPrice = cart.reduce((accum, item) => {
        return accum + item.price * item.amountPizzas;
    }, 0);

    totalAmount = cart.reduce((accum, item) => {
        return accum + item.amountPizzas;
    }, 0);

    return {
        ...state,
        cart,
        totalPrice,
        totalAmount
    }
}

const decreasePizzaAmountSuccess = (state, action) => {
    const cart = state.cart;
    let totalPrice = state.totalPrice;
    let totalAmount = state.totalAmount;
    const index = cart.findIndex(item => item.id === action.payload);

    if (index !== -1) cart[index].amountPizzas -= 1;

    totalPrice = cart.reduce((accum, item) => {
        return accum + item.price * item.amountPizzas;
    }, 0);

    totalAmount = cart.reduce((accum, item) => {
        return accum + item.amountPizzas;
    }, 0);

    return {
        ...state,
        cart,
        totalPrice,
        totalAmount
    }
}

const deletePizzaItemSuccess = (state, action) => {
    let newCart = [];
    let totalPrice = state.totalPrice;
    let totalAmount = state.totalAmount;

    newCart = state.cart.filter(item => item.id !== action.payload);

    totalPrice = newCart.reduce((accum, item) => {
        return accum + item.price * item.amountPizzas;
    }, 0);

    totalAmount = newCart.reduce((accum, item) => {
        return accum + item.amountPizzas;
    }, 0);

    return {
        ...state,
        cart: newCart,
        totalPrice,
        totalAmount
    }
};

const clearCartSuccess = (state, action) => {
    return {
        ...state,
        cart: []
    }
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_PIZZA_TO_CART_SUCCESS:
            return addPizzaToCartSuccess(state, action)
        case Types.INC_PIZZA_AMOUNT_SUCCESS:
            return increasePizzaAmountSuccess(state, action)
        case Types.DEC_PIZZA_AMOUNT_SUCCESS:
            return decreasePizzaAmountSuccess(state, action)
        case Types.DELETE_PIZZA_ITEM_SUCCESS:
            return deletePizzaItemSuccess(state, action)
        case Types.CLEAR_CART_SUCCESS:
            return clearCartSuccess(state, action);    
        default:
            return state;
    }
}

export default cart;
