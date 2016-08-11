/* eslint-disable no-use-before-define */

import { List } from 'immutable';
import { SET_WEATHER } from '../constants';

const INITIAL_STATE = List.of();

const weatherReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_WEATHER:
      return setWeather(state, action.payload);
    default:
      return state;
  }
};

const setWeather = (state, weather = List.of()) => {
  return state.clear().concat(weather);
};

export default weatherReducer;
