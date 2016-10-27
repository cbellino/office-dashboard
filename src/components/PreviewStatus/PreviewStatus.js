/* @flow */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Strip from '../Strip';
import { previewStatus } from '../../data/utils/previews';

import type { PreviewStatus as PreviewStatusType } from '../../types';

const propTypes = {
  status: PropTypes.string,
  className: PropTypes.string,
};

type Props = {
  status?: PreviewStatusType,
  className?: string,
};

function PreviewStatus(props: Props) {
  const status = (props.status !== previewStatus.BUSY) ? previewStatus.FREE : previewStatus.BUSY;
  const variant = (status === previewStatus.BUSY) ? 'error' : 'success';
  const rootClass = classNames(props.className);

  return <Strip variant={variant} className={rootClass}>{status}</Strip>;
}

PreviewStatus.propTypes = propTypes;

export default PreviewStatus;
