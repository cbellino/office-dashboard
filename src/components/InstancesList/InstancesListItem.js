import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import { InstancePropType, PersonPropType } from './PropTypes';
import PersonChip from './PersonChip';
import InstanceStatusChip from './InstanceStatusChip';
import s from './InstancesListItem.css';

const InstancesListItem = ({ instance, manager, className }) => {
  const rootClass = classNames(className, s.root);

  return (
    <div className={rootClass}>
      <InstanceStatusChip className={s.manager} status={instance.get('status')}>
        {manager ? (<PersonChip person={manager} />) : null}
      </InstanceStatusChip>
      <div className={s.content}>
        {instance.get('status') !== 'free' ? instance.get('comment') : 'Free'}
      </div>
      <div className={s.number}>
        <div>{`#${instance.get('id')}`}</div>
      </div>
    </div>
  );
};

InstancesListItem.propTypes = {
  instance: InstancePropType.isRequired,
  manager: PersonPropType,
  className: PropTypes.string,
};

// console.log('style', withStyles(s)(InstancesListItem));

export default withStyles(s)(InstancesListItem);
