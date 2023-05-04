
import * as Types from 'ConfigsRoot/constants';

export const getPizzaRequest = () => ({ type: Types.GET_PIZZA });

export const createNewProduct = params => ({ type: Types.CREATE_NEW_PRODUCT, payload: params })
