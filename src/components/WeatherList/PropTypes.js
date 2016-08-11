import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const WeatherItemPropType = ImmutablePropTypes.mapContains({
  city: PropTypes.string.isRequired,
  temperature: PropTypes.string,
  message: PropTypes.string,
});

export const WeatherPropType = ImmutablePropTypes.listOf(
  WeatherItemPropType
);
