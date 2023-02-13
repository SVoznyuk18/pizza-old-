import * as Types from '../../../configs/constants';

export const addPizzaToCart = params => ({type: Types.ADD_PIZZA_TO_CART, payload: params});

export const increasePizzaAmount = params => ({type: Types.INC_PIZZA_AMOUNT, payload: params});

export const decreasePizzaAmount = params => ({type: Types.DEC_PIZZA_AMOUNT, payload: params});

export const deletePizzaItem = params => ({type: Types.DELETE_PIZZA_ITEM, payload: params});

export const clearCart = params => ({type: Types.CLEAR_CART, payload: params});
