import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { InstancePropType, PersonPropType } from './PropTypes';
import s from './InstancesListItem.css';

const InstancesListItem = ({ instance, manager }) => (
  <div className={s.root}>
    {manager ? (
      <div>
        <img
          src={manager.get('avatar')}
          alt={manager.get('username')}
          style={{ width: '24px' }}
        />
        {manager.get('username')}
      </div>
    ) : null}
    <b>{`#${instance.get('id')}`}</b>
    <span>{instance.get('comment')}</span>
  </div>
);

InstancesListItem.propTypes = {
  instance: InstancePropType.isRequired,
  manager: PersonPropType,
};

export default withStyles(s)(InstancesListItem);
