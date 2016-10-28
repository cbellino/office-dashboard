/* @flow */

import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { hideNotification } from '../actions';

const propTypes = {
  notification: ImmutablePropTypes.mapContains({
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

function Notification({ notification, onRequestClose }) {
  return (
    <Snackbar
      open={notification.get('open')}
      message={notification.get('message')}
      autoHideDuration={2000}
      onRequestClose={onRequestClose}
    />
  );
}

Notification.propTypes = propTypes;

function mapStateToProps(state) {
  const notification = state.get('notification');

  return { notification };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestClose: () => dispatch(hideNotification()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
