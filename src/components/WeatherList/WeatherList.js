import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { List } from 'immutable';

import { WeatherPropType } from './PropTypes';
import WeatherListItemContainer from '../../containers/WeatherListItem';
import s from './WeatherList.css';

const weatherNodes = (weather) => (
  weather.map((weatherItem) => (
    <WeatherListItemContainer
      key={weather.get('id')}
      weatherItem={weatherItem}
      className={s.item}
    />
  ))
);

const emptyNodes = (
  <div>
    <div>{'¯\\_(ツ)_/¯'}</div>
    <h5>{' No weather'}</h5>
  </div>
);

const WeatherList = ({ weather = List.of() }) => (
    <div className={s.root}>
      <h3 className={s.title}>{'Weather'}</h3>
      {weather.isEmpty() ? emptyNodes : weatherNodes(weather)}
    </div>
);

WeatherList.propTypes = {
  Weather: WeatherPropType,
};

export default withStyles(s)(WeatherList);
