/* eslint-disable no-use-before-define */

import { List } from 'immutable';
import { SET_INSTANCES } from '../constants';

const INITIAL_STATE = List.of();

const instancesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_INSTANCES:
      return setInstances(state, action.payload);
    default:
      return state;
  }
};

const setInstances = (state, instances = List.of()) => {
  return state.clear().concat(instances);
};

export default instancesReducer;
