import * as Types from 'ConfigsRoot/constants'

export const placeNewOrder = params => ({type: Types.PLACE_NEW_ORDER, payload: params});

export const getOrders = () => ({type: Types.GET_ORDERS});