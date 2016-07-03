import { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const InstancePropType = ImmutablePropTypes.mapContains({
  id: PropTypes.string.isRequired,
  manager: PropTypes.string,
  comment: PropTypes.string,
  status: PropTypes.string,
});

export const PersonPropType = ImmutablePropTypes.mapContains({
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
});

export const InstancesPropType = ImmutablePropTypes.listOf(
  InstancePropType
);
