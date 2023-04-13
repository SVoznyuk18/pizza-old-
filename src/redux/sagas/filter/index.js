import { take } from 'lodash';
import { takeEvery, put } from 'redux-saga/effects'

import * as Types from 'ConfigsRoot/constants';

function* watchCurrentFilter(action) {
    try {
        yield put({ type: Types.GET_CURRENT_FILTER_SUCCESS, payload: action.payload });
    } catch (e) {
        yield put({ type: Types.GET_CURRENT_FILTER_FAILURE, payload: true });
    }
}

function* watchSortBy(action) {
    try {
        yield put({ type: Types.SORT_BY_SUCCESS, payload: action.payload });
    } catch {
        yield put({ type: Types.SORT_BY_FAILURE, payload: true });
    }
}

function* watchFilterCategory(action) {
    try {
        yield put({ type: Types.FILTER_CATEGORY_SUCCESS, payload: action.payload });
    } catch {
        yield put({ type: Types.FILTER_CATEGORY_FAILURE, payload: action.payload });
    }
}

export default function* watchFilter() {
    yield takeEvery(Types.SORT_BY, watchSortBy);
    yield takeEvery(Types.FILTER_CATEGORY, watchFilterCategory);
    yield takeEvery(Types.GET_CURRENT_FILTER, watchCurrentFilter);
}