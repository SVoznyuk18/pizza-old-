import { takeEvery, put, call } from 'redux-saga/effects'

import { GET_PIZZA } from '../constants';
import { setPizza, setPizzaLoading, setPizzaError } from '../actions/pizza';
import { http } from '../../api/http';

const { request } = http();


export function* handlePizza() {
    try {
        yield put(setPizzaLoading(true))
        const pizza = yield call(request, "http://localhost:3001/pizzas");
        yield put(setPizzaLoading(false));
        yield put(setPizza(pizza));
    } catch {
        yield put(setPizzaError(true));
    }


}

export function* watcherPizza() {
    yield takeEvery(GET_PIZZA, handlePizza)
}

export default function* rootSaga() {
    yield watcherPizza()
}

