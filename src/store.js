/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => noop => noop);

export default function configureStore(initialState = {}) {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry
  store.asyncSagas = {};

  return store;
}
