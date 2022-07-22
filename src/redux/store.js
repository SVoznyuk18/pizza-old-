import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from './reducers';
import rootSaga from "./sagas";
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedState => createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;