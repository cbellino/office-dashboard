import { Map } from 'immutable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';

import * as reducers from '../reducers';

const INITIAL_STATE = Map.of();
const logger = createLogger();
const enhancer = compose(
  applyMiddleware(thunk, logger),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f,
);

export default function configureStore(initialState = INITIAL_STATE) {
  const reducer = combineReducers(reducers);
  const store = createStore(reducer, initialState, enhancer);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = combineReducers(require('../reducers'));
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
