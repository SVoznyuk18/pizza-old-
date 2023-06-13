/* eslint-disable object-curly-newline */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { fork, all } from 'redux-saga/effects';
import reducer from './reducers';
import { watchPizza, watchFilter, watchCart, watchLogin, watchUsers, watchOrders } from './sagas';

// eslint-disable-next-line func-names
const rootSaga = function* () {
  yield all([
    fork(watchPizza),
    fork(watchFilter),
    fork(watchCart),
    fork(watchLogin),
    fork(watchUsers),
    fork(watchOrders),
  ]);
};

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
  })
  : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState) => createStore(
  reducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
