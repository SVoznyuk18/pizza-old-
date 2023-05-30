import { takeEvery, put, takeLatest , call, select, delay} from 'redux-saga/effects'

import { createNewDocument, saveNewUser, getDocuments, deleteUser } from 'UtilsRoot'
import { handleToggleModal, createNewProduct } from 'ActionsRoot';
import * as Types from 'ConfigsRoot/constants';
import { db } from 'UtilsRoot/firebase';


const getModalType = state => state.modal.modalType;

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

function* watchCreateNewProduct(action) {
    try{
        const { category, imageUrl, name, price, rating, sizes, types } = action.payload;
        const data = {
            category,
            imageUrl,
            name,
            price: +price,
            rating: +rating,
            id: `${name}-${category}`,
            sizes,
            types,
        }
        yield put({ type: Types.GET_PIZZA_LOADING, payload: true });
        yield createNewDocument(db, 'pizzas', `${name}-${category}`, data);

        const pizza = yield getDocuments(db, "pizzas");
        yield put({ type: Types.GET_PIZZA_LOADING, payload: false });
        yield put({ type: Types.GET_PIZZA_SUCCESS, payload: pizza });

        yield put({type: Types.MODAL_SHOW, payload: {isOpenModal: false, modalType: null, payload: null}});
        yield put({type: Types.MODAL_SHOW, payload: {isOpenModal: true, modalType: Types.MODAL.SUCCESS_MODAL, payload: {message: 'addProductSuccessed', status: 'success'}}});

        yield delay(5000);

        const modalType = yield select(getModalType);

        if(modalType === Types.MODAL.SUCCESS_MODAL) {
            yield put({type: Types.MODAL_SHOW, payload: {isOpenModal: false, modalType: null, payload: null}});
        }

    } catch {

    }
}

export default function* watchPizza() {
    yield takeLatest(Types.GET_PIZZA, watchGetPizzaRequest);
    yield takeLatest(Types.CREATE_NEW_PRODUCT, watchCreateNewProduct)

}