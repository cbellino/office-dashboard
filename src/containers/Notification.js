import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

const propTypes = {
  notification: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

function Notification(props) {
  const { notification } = props;

  return (
    <Snackbar
      open={notification.open}
      message={notification.message}
      autoHideDuration={2000}
    />
  );
}

Notification.propTypes = propTypes;

function mapStateToProps(state) {
  const notification = state.notification;

  return { notification };
}

export default connect(mapStateToProps)(Notification);
