import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const InstancePropType = ImmutablePropTypes.mapContains({
  id: React.PropTypes.string.isRequired,
  manager: React.PropTypes.string,
  comment: React.PropTypes.string,
});

export const PersonPropType = ImmutablePropTypes.mapContains({
  username: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string.isRequired,
});

export const InstancesPropType = ImmutablePropTypes.listOf(
  InstancePropType
);
