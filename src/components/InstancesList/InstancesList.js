import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { List } from 'immutable';

import { InstancesPropType } from './PropTypes';
import InstancesListItemContainer from '../../containers/InstancesListItem';
import s from './InstancesList.css';

const instancesNodes = (instances) => (
  instances.map((instance) => (
    <InstancesListItemContainer
      key={instance.get('id')}
      instance={instance}
      className={s.item}
    />
  ))
);

const emptyNodes = (
  <div>
    <div>{'¯\\_(ツ)_/¯'}</div>
    <h5>{' No instances.'}</h5>
  </div>
);

const InstancesList = ({ instances = List.of() }) => (
  <div className={s.root}>
    <h3 className={s.title}>{'Instances'}</h3>
    {instances.isEmpty() ? emptyNodes : instancesNodes(instances)}
  </div>
);

InstancesList.propTypes = {
  instances: InstancesPropType,
};

export default withStyles(s)(InstancesList);
