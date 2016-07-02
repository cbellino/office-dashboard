/* eslint-disable no-use-before-define */

import { List, fromJS } from 'immutable';
import { GET_INSTANCES } from '../constants';

const INITIAL_STATE = List.of();

const instancesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_INSTANCES:
      return getInstances(state);
    default:
      return state;
  }
};

const getInstances = (state) => (
  fromJS([
    { id: '1', manager: 'cbellino', comment: 'Molestias fugit inventore corporis' },
  ])
);

export default instancesReducer;
