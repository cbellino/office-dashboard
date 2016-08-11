import { List , fromJS } from 'immutable';

import { SET_WEATHER } from '../constants';

export const setWeather = (weather = List.of()) => (
  { type: SET_WEATHER, payload: weather }
);

export const startIntervalFetchWeather = () => (
  dispatch => {
    setInterval(() => {
      const weather = fromJS([{
        city: 'Paris, France',
        message: 'Beau temps',
        temperature: '28°'
      }]);
      dispatch(setWeather(weather));
    }, 1000);
  }
);
