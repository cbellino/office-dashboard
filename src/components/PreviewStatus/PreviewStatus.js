import React, { PropTypes } from 'react';
import Strip from '../Strip';

const propTypes = {
  status: PropTypes.string.isRequired,
};

function PreviewStatus(props) {
  const status = (props.status !== 'FREE') ? 'BUSY' : 'FREE';
  const variant = (status === 'BUSY') ? 'error' : 'success';

  return <Strip variant={variant}>{status}</Strip>;
}

PreviewStatus.propTypes = propTypes;

export default PreviewStatus;
