/* @flow */

import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import * as reducers from '../reducers';

import type { State } from '../types';

const INITIAL_STATE = Map();

export default function configureStore(initialState: State = INITIAL_STATE) {
  const composeEnhancers = (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
  ) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) // eslint-disable-line no-underscore-dangle
  : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk, promise),
  );
  const reducer = combineReducers(reducers);
  const store = {
    ...createStore(reducer, initialState, enhancer),
  };

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    // $FlowFixMe: suppressing this error since this is code used only by webpack on local machines
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = combineReducers(require('../reducers'));

      store.replaceReducer(nextRootReducer);
      /* eslint-enable global-require */
    });
  }

  return store;
}
