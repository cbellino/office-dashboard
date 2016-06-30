import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Dashboard.css';

const Dashboard = () => (
  <div className={s.root}>
    <h1>Dashboard</h1>
  </div>
);

Dashboard.propTypes = {

};

export default withStyles(s)(Dashboard);
