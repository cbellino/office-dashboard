/* @flow */

import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

const propTypes = {
  notification: ImmutablePropTypes.mapContains({
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

function Notification({ notification }) {
  return (
    <Snackbar
      open={notification.get('open')}
      message={notification.get('message')}
      autoHideDuration={2000}
    />
  );
}

Notification.propTypes = propTypes;

function mapStateToProps(state) {
  const notification = state.get('notification');

  return { notification };
}

export default connect(mapStateToProps)(Notification);
