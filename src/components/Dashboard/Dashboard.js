import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import InstancesListContainer from '../../containers/InstancesList';
import s from './Dashboard.css';

const Dashboard = () => (
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

Dashboard.propTypes = {

};

export default withStyles(s)(Dashboard);
