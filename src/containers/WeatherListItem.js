import { connect } from 'react-redux';

import WeatherListItem from '../components/WeatherList/WeatherListItem';

function mapStateToProps(state, { weatherItem }) {
  return {};
}

export default connect(mapStateToProps)(WeatherListItem);
