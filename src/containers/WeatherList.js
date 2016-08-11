import { connect } from 'react-redux';

import WeatherList from '../components/WeatherList/WeatherList';

function mapStateToProps(state) {
  return {
    weather: state.get('weather'),
  };
}

export default connect(mapStateToProps)(WeatherList);
