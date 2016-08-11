import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { store } from '../App/App';
import { startListeningToInstances } from '../../actions/instances';
import { startIntervalFetchWeather } from '../../actions/weather';
import InstancesListContainer from '../../containers/InstancesList';
import WeatherListContainer from '../../containers/WeatherList';
import s from './Dashboard.css';

class Dashboard extends Component {
  componentWillMount() {
    store.dispatch(startListeningToInstances());
    store.dispatch(startIntervalFetchWeather());
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.section}>
          <InstancesListContainer />
        </div>
        <div className={s.section}>
          <WeatherListContainer />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default withStyles(s)(Dashboard);
