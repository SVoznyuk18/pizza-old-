import { takeEvery, put } from 'redux-saga/effects'

import * as Types from 'ConfigsRoot/constants';
import { db } from 'UtilsRoot/firebase';
import { getDocuments } from 'UtilsRoot';

function* watchGetPizzaRequest() {
    try {
        yield put({ type: Types.GET_PIZZA_LOADING, payload: true });
        const pizza = yield getDocuments(db, "pizzas");
        yield put({ type: Types.GET_PIZZA_LOADING, payload: false });
        yield put({ type: Types.GET_PIZZA_SUCCESS, payload: pizza });

    } catch {
        yield put({ type: Types.GET_PIZZA_FAILURE, payload: true });
    }
}

export default function* watchPizza() {
    yield takeEvery(Types.GET_PIZZA, watchGetPizzaRequest);
}