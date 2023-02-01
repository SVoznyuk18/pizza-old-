import { takeEvery, put, call } from 'redux-saga/effects'

import { GET_PIZZA } from '../constants';
import { setPizza, setPizzaLoading, setPizzaError } from '../actions/pizza';
import { getPizzaApiRequest } from '../../api/http';

export function* watchGetPizzaRequest() {
    try {
        yield put(setPizzaLoading(true))
        const pizza = yield call(getPizzaApiRequest);
        yield put(setPizzaLoading(false));
        yield put(setPizza(pizza.data));
    } catch {
        yield put(setPizzaError(true));
    }
}

export function* watchPizza() {
    yield takeEvery(GET_PIZZA, watchGetPizzaRequest);
}

export default function* rootSaga() {
    yield watchPizza();
}

