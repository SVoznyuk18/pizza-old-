import { put, takeLatest, call, select, delay } from 'redux-saga/effects'
import { v4 as uuidv4 } from 'uuid';

import * as Types from 'ConfigsRoot/constants';

import { createNewDocument, getDocuments } from 'UtilsRoot'
import { db } from 'UtilsRoot/firebase';

const getCart = state => state.cart;
const getModalType = state => state.modal.modalType;

function* watchPlaceNewOrder(action) {
    try {
        const { apartment, date, email, house, name, phone, street, time } = action.payload;
        const { cart, totalPrice, totalAmount } = yield select(getCart);
        const orderConfig = {
            orderId: uuidv4(),
            clientInfo: {
                name,
                phone,
                email,
                street,
                house,
                apartment,
                date,
                time
            },
            orderInfo: {
                totalPrice,
                totalAmount,
                order: cart,
                orderStatus: 'ordered'
            }
        }

        yield createNewDocument(db, 'orders', `${name}-${phone}-${uuidv4()}`, orderConfig);

        yield put({ type: Types.CLEAR_CART_SUCCESS });

        yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: false, modalType: null, payload: null } });
        yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.SUCCESS_MODAL, payload: { message: 'placeNewOrderSuccess', status: 'success' } } });

        yield delay(5000);

        const modalType = yield select(getModalType);

        if (modalType === Types.MODAL.SUCCESS_MODAL) {
            yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: false, modalType: null, payload: null } });
        }

    } catch {
        console.log('error watchPlaceNewOrder');
    }
}

function* watchGetOrders() {
    try {
        yield put({ type: Types.GET_ORDERS_LOADING, payload: true });
        const orders = yield call(getDocuments, db, 'orders');
        yield put({ type: Types.GET_ORDERS_SUCCESS, payload: { orders } });
        yield put({ type: Types.GET_ORDERS_LOADING, payload: false });
    } catch {
        console.log('watchGetOrders error');
        yield put({ type: Types.GET_ORDERS_FAILURE, payload: 'get orders error' });
    }
}

export default function* watchOrders() {
    yield takeLatest(Types.PLACE_NEW_ORDER, watchPlaceNewOrder);
    yield takeLatest(Types.GET_ORDERS, watchGetOrders);
}