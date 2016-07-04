import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { store } from '../App/App';
import { startListeningToInstances } from '../../actions/instances';
import InstancesListContainer from '../../containers/InstancesList';
import s from './Dashboard.css';

class Dashboard extends Component {
  componentWillMount() {
    store.dispatch(startListeningToInstances());
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.section}></div>
        <div className={s.section}></div>
        <div className={s.section}></div>
        <div className={s.section}></div>
        <div className={s.section}>
          <InstancesListContainer />
        </div>
        <div className={s.section}></div>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default withStyles(s)(Dashboard);
