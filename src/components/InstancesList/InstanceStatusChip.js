import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import s from './InstanceStatusChip.css';

const InstanceStatusChip = ({ children, className, status }) => {
  const rootClass = classNames(className, s.root, s[status]);

  return (
    <div className={rootClass}>{children}</div>
  );
};

InstanceStatusChip.propTypes = {
  status: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
};

// console.log('style', withStyles(s)(InstanceStatusChip));

export default withStyles(s)(InstanceStatusChip);
