import { takeEvery, put } from 'redux-saga/effects'
import { collection, getDocs } from "firebase/firestore";

import * as Types from 'ConfigsRoot/constants';

import { db } from 'UtilsRoot/firebase';

function* watchGetPizzaRequest() {
    try {
        let pizza = [];
        yield put( {type: Types.GET_PIZZA_LOADING, payload: true});
        const querySnapshot = yield getDocs(collection(db, "pizzas"));
        querySnapshot.forEach((doc) => {
            pizza = [...pizza, doc.data()]
        })
        yield put({type: Types.GET_PIZZA_LOADING, payload: false});
        yield put({type: Types.GET_PIZZA_SUCCESS, payload: pizza});
 
    } catch {
        yield put({type: Types.GET_PIZZA_FAILURE, payload: true});
    }
}

export default function* watchPizza() {
    yield takeEvery(Types.GET_PIZZA, watchGetPizzaRequest);
}