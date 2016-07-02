/* eslint-disable no-use-before-define */

import { List } from 'immutable';
import { fromJS } from 'immutable';
import { GET_PERSON } from '../constants';

const INITIAL_STATE = List.of();

const people = fromJS([
  {
    username: 'cbellino',
    first_name: 'Colin',
    last_name: 'Bellino',
    avatar: 'https://avatars3.githubusercontent.com/u/622180?v=3&s=460'
  }
]);

const peopleReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_PERSON:
      return getPerson(state, action.username);
    default:
      return state;
  }
};

const getPerson = (state, username) => {
  return people.find(person => person.get('username') === username);
};

export default peopleReducer;
