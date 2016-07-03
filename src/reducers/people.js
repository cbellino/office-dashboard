/* eslint-disable no-use-before-define */

import { List, fromJS } from 'immutable';
import { GET_PERSON } from '../constants';

const INITIAL_STATE = List.of();
const people = fromJS(require('../store/data').people);

const peopleReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_PERSON:
      return getPerson(state, action.username);
    default:
      return state;
  }
};

const getPerson = (state, username) => (
  people.find(person => person.get('username') === username)
);

export default peopleReducer;
