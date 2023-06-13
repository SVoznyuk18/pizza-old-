// eslint-disable-next-line object-curly-newline
import { put, takeLatest, call, select, delay } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';

import * as Types from 'ConfigsRoot/constants';
import { createNewDocument, getDocuments, getDocument } from 'UtilsRoot';
import { db } from 'UtilsRoot/firebase';

const getCart = (state) => state.cart;
const getModalType = (state) => state.modal.modalType;

function* watchPlaceNewOrder(action) {
  try {
    const {
      apartment,
      date, email,
      house, name,
      phone,
      street,
      time,
    } = action.payload;
    const { cart, totalPrice, totalAmount } = yield select(getCart);
    const id = uuidv4();
    const timeStamp = Date.now();
    const orderConfig = {
      orderId: id,
      clientInfo: {
        name,
        phone,
        email,
        street,
        house,
        apartment,
        date,
        time,
      },
      orderInfo: {
        totalPrice,
        totalAmount,
        orderItems: cart,
        orderStatus: 'ordered',
        timeStamp,
      },
    };

    yield createNewDocument(db, 'orders', id, orderConfig);

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

function* watchIncresePizzaAmountPlacedOrder(action) {
  try {
    const { orderId, productId } = action.payload;
    const order = yield call(getDocument, db, 'orders', orderId);

    const orderItems = yield order.orderInfo.orderItems.map((orderItem) => {
      if (orderItem.id === productId) {
        return { ...orderItem, amountPizzas: orderItem.amountPizzas + 1 };
      }
      return orderItem;
    });

    // eslint-disable-next-line arrow-body-style
    const totalPrice = yield orderItems.reduce((accum, item) => {
      return accum + item.price * item.amountPizzas;
    }, 0);

    // eslint-disable-next-line arrow-body-style
    const totalAmount = yield orderItems.reduce((accum, item) => {
      return accum + item.amountPizzas;
    }, 0);

    const orderConfig = {
      ...order,
      orderInfo: {
        ...order?.orderInfo,
        totalAmount,
        totalPrice,
        orderItems,
      },
    };
    yield call(createNewDocument, db, 'orders', orderId, orderConfig);
    yield put({ type: Types.GET_ORDERS });
  } catch {
    console.log('watchIncPizzaAmountPlacedOrder error');
  }
}

function* watchDecreasePizzaAmountPlacedOrder(action) {
  try {
    const { orderId, productId } = action.payload;
    const order = yield call(getDocument, db, 'orders', orderId);

    const orderItems = yield order.orderInfo.orderItems.map((orderItem) => {
      if (orderItem.id === productId && orderItem.amountPizzas > 1) {
        return { ...orderItem, amountPizzas: orderItem.amountPizzas - 1 };
      }
      return orderItem;
    });

    // eslint-disable-next-line arrow-body-style
    const totalPrice = yield orderItems.reduce((accum, item) => {
      return accum + item.price * item.amountPizzas;
    }, 0);

    // eslint-disable-next-line arrow-body-style
    const totalAmount = yield orderItems.reduce((accum, item) => {
      return accum + item.amountPizzas;
    }, 0);

    const orderConfig = {
      ...order,
      orderInfo: {
        ...order?.orderInfo,
        totalAmount,
        totalPrice,
        orderItems,
      },
    };
    yield call(createNewDocument, db, 'orders', orderId, orderConfig);
    yield put({ type: Types.GET_ORDERS });
  } catch {
    console.log('errr watchDecPizzaAmountPlacedOrder');
  }
}

function* watchDeletePizzaAmountPlacedOrder(action) {
  try {
    const { orderId, productId } = action.payload;
    const order = yield call(getDocument, db, 'orders', orderId);

    const orderItems = yield order.orderInfo.orderItems.filter((orderItem) => orderItem.id !== productId);

    // eslint-disable-next-line arrow-body-style
    const totalPrice = yield orderItems.reduce((accum, item) => {
      return accum + item.price * item.amountPizzas;
    }, 0);

    // eslint-disable-next-line arrow-body-style
    const totalAmount = yield orderItems.reduce((accum, item) => {
      return accum + item.amountPizzas;
    }, 0);

    const orderConfig = {
      ...order,
      orderInfo: {
        ...order?.orderInfo,
        totalAmount,
        totalPrice,
        orderItems,
      },
    };
    yield call(createNewDocument, db, 'orders', orderId, orderConfig);
    yield put({ type: Types.GET_ORDERS });
  } catch {
    console.log('errr watchDelPizzaAmountPlacedOrder');
  }
}

function* watchChangeOrderStatus(action) {
  try {
    const { orderId, orderStatus } = action.payload;
    const order = yield call(getDocument, db, 'orders', orderId);

    const orderConfig = {
      ...order,
      orderInfo: {
        ...order?.orderInfo,
        orderStatus,
      },
    };
    yield call(createNewDocument, db, 'orders', orderId, orderConfig);
    yield put({ type: Types.GET_ORDERS });
  } catch {
    console.log('errr watchChangeOrderStatus');
  }
}

export default function* watchOrders() {
  yield takeLatest(Types.PLACE_NEW_ORDER, watchPlaceNewOrder);
  yield takeLatest(Types.GET_ORDERS, watchGetOrders);
  yield takeLatest(Types.INCREASE_PIZZA_AMOUNT_PLACED_ORDER, watchIncresePizzaAmountPlacedOrder);
  yield takeLatest(Types.DECREASE_PIZZA_AMOUNT_PLACED_ORDER, watchDecreasePizzaAmountPlacedOrder);
  yield takeLatest(Types.DELETE_PIZZA_AMOUNT_PLACED_ORDER, watchDeletePizzaAmountPlacedOrder);
  yield takeLatest(Types.CHANGE_ORDER_STATUS, watchChangeOrderStatus);
}
