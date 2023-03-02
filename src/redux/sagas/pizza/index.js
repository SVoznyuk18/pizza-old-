import { takeEvery, put, call } from 'redux-saga/effects'

import * as Types from 'Configs/constants';

import { getPizzaApiRequest } from 'Api';

function* watchGetPizzaRequest() {
    try {
        yield put( {type: Types.GET_PIZZA_LOADING, payload: true});
        const pizza = yield call(getPizzaApiRequest);
        yield put({type: Types.GET_PIZZA_LOADING, payload: false});
        yield put({type: Types.GET_PIZZA_SUCCESS, payload: pizza.data});
    } catch {
        yield put({type: Types.GET_PIZZA_FAILURE, payload: true});
    }
}

export default function* watchPizza() {
    yield takeEvery(Types.GET_PIZZA, watchGetPizzaRequest);
}