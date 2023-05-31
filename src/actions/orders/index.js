import * as Types from 'ConfigsRoot/constants';

export const placeNewOrder = (params) => ({ type: Types.PLACE_NEW_ORDER, payload: params });

export const getOrders = () => ({ type: Types.GET_ORDERS });

export const increasePizzaAmountPlacedOrder = (params) => ({ type: Types.INCREASE_PIZZA_AMOUNT_PLACED_ORDER, payload: params });

export const decreasePizzaAmountPlacedOrder = (params) => ({ type: Types.DECREASE_PIZZA_AMOUNT_PLACED_ORDER, payload: params });

export const deletePizzaAmountPlacedOrder = (params) => ({ type: Types.DELETE_PIZZA_AMOUNT_PLACED_ORDER, payload: params });
