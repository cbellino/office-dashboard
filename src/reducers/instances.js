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
    { id: '20', status: 'in_use', manager: 'mehdi-fekih', comment: 'Molestias fugit inventore corporis' },
    { id: '21', status: 'free' },
    { id: '22', status: 'free' },
    { id: '23', status: 'in_use', manager: 'cbellino', comment: 'Tempora reiciendis corporis nesciunt' },
    { id: '24', status: 'locked', manager: 'cbellino', comment: 'Placeat praesentium, architecto' },
    { id: '25', status: 'free' },
    { id: '26', status: 'free' },
  ])
);

export default instancesReducer;
