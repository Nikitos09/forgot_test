// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import { all, fork } from 'redux-saga/effects';
import { createLogger } from 'redux-logger';
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  let middleware;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  if (process.env.NODE_ENV === 'development') {
    middleware = composeEnhancers(applyMiddleware(
      sagaMiddleware,
      // createLogger()
    ));
  } else {
    middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
  }
  const store = createStore(rootReducer(), middleware);
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(rootReducer(store.asyncReducers));
}

export function injectAsyncSaga(asyncSaga) {
  function* rootSaga() {
    yield all(Object.keys(asyncSaga).map(sagaName => fork(asyncSaga[sagaName])));
  }
  sagaMiddleware.run(rootSaga).done.catch(error => console.warn(error));
}

export default configureStore();