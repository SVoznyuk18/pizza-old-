import { put, select, takeLatest } from 'redux-saga/effects';

import * as Types from 'ConfigsRoot/constants';

const getCart = (state) => state.cart.cart;

function* watchGetCurrentOrder(action) {
  try {
    yield put({ type: Types.GET_CURRENT_ORDER_SUCCESS, payload: action.payload });
  } catch (e) {
    yield put({ type: Types.GET_CURRENT_ORDER_FAILURE, payload: true });
  }
}

function* watchAddPizzaToCart(action) {
  try {
    const cart = yield select(getCart);
    const order = action.payload;
    if (cart.length !== 0) {
      const index = cart.findIndex((item) => item.id === order?.id);
      if (index !== -1) {
        order.amountPizzas = cart[index].amountPizzas + 1;
        yield put({ type: Types.INC_PIZZA_AMOUNT_SUCCESS, payload: { id: order?.id, price: order?.price } });
      } else {
        yield put({ type: Types.ADD_PIZZA_TO_CART_SUCCESS, payload: order });
      }
    } else {
      yield put({ type: Types.ADD_PIZZA_TO_CART_SUCCESS, payload: order });
    }
  } catch {
    yield put({ type: Types.ADD_PIZZA_TO_CART_FAILURE, payload: true });
    yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.STATUS_MODAL, params: { status: 'failure' } } });
  }
}

function* watchIncreasePizzaAmount(action) {
  try {
    yield put({ type: Types.INC_PIZZA_AMOUNT_SUCCESS, payload: action.payload });
  } catch {
    console.log('should do smt');
    yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.STATUS_MODAL, params: { status: 'failure' } } });
  }
}

function* watchDecreasePizzaAmount(action) {
  try {
    const cart = yield select(getCart);
    const index = cart.findIndex((item) => item.id === action.payload.id);
    if (cart[index].amountPizzas > 1) {
      yield put({ type: Types.DEC_PIZZA_AMOUNT_SUCCESS, payload: action.payload.id });
    } else {
      yield put({ type: Types.DELETE_PIZZA_ITEM_SUCCESS, payload: action.payload.id });
    }
  } catch {
    console.log('should do smt');
    yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.STATUS_MODAL, params: { status: 'failure' } } });
  }
}

function* watchDeletePizzaItem(action) {
  try {
    yield put({ type: Types.DELETE_PIZZA_ITEM_SUCCESS, payload: action.payload.id });
  } catch {
    console.log('should do watchDeletePizzaItem');
    yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.STATUS_MODAL, params: { status: 'failure' } } });
  }
}

function* watchClearCart() {
  try {
    yield put({ type: Types.CLEAR_CART_SUCCESS });
  } catch {
    console.log('should do smt');
    yield put({ type: Types.MODAL_SHOW, payload: { isOpenModal: true, modalType: Types.MODAL.STATUS_MODAL, params: { status: 'failure' } } });
  }
}

export default function* watchCart() {
  yield takeLatest(Types.ADD_PIZZA_TO_CART, watchAddPizzaToCart);
  yield takeLatest(Types.INC_PIZZA_AMOUNT, watchIncreasePizzaAmount);
  yield takeLatest(Types.DEC_PIZZA_AMOUNT, watchDecreasePizzaAmount);
  yield takeLatest(Types.DELETE_PIZZA_ITEM, watchDeletePizzaItem);
  yield takeLatest(Types.CLEAR_CART, watchClearCart);
  yield takeLatest(Types.GET_CURRENT_ORDER, watchGetCurrentOrder);
}
