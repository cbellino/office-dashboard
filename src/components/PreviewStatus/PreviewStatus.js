import React, { PropTypes } from 'react';
import Strip from '../Strip';

const propTypes = {
  status: PropTypes.string.isRequired,
};

function PreviewStatus(props) {
  const status = (props.status !== 'free') ? 'busy' : 'free';
  const variant = (status === 'busy') ? 'error' : 'success';

  return <Strip variant={variant}>{status}</Strip>;
}

PreviewStatus.propTypes = propTypes;

export default PreviewStatus;
