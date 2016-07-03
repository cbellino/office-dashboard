/* eslint-disable no-use-before-define */

import { List, fromJS } from 'immutable';
import { GET_INSTANCES } from '../constants';

const INITIAL_STATE = List.of();
const instances = fromJS(require('../store/data').instances);

const instancesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_INSTANCES:
      return getInstances(state);
    default:
      return state;
  }
};

const getInstances = (state) => (
  instances
);

export default instancesReducer;
