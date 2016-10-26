/* @flow */

import React, { PropTypes } from 'react';
import Strip from '../Strip';

import type { PreviewStatus as PreviewStatusType } from '../../types';

const propTypes = {
  status: PropTypes.string,
};

function PreviewStatus(props: { status: PreviewStatusType }) {
  const status = (props.status !== 'BUSY') ? 'FREE' : 'BUSY';
  const variant = (status === 'BUSY') ? 'error' : 'success';

  return <Strip variant={variant}>{status}</Strip>;
}

PreviewStatus.propTypes = propTypes;

export default PreviewStatus;
