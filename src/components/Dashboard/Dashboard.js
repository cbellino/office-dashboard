import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import InstancesListContainer from '../../containers/InstancesList';
import s from './Dashboard.css';

const Dashboard = () => (
  <div className={s.root}>
    <h1>Dashboard</h1>
    <InstancesListContainer />
  </div>
);

Dashboard.propTypes = {

};

export default withStyles(s)(Dashboard);
