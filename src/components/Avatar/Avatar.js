/* @flow */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Avatar.css';

const propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

function Avatar(props) {
  const { text, children, className } = props;
  const rootClass = classNames(s.root, className, {
    [s.hasChildren]: !!children,
  });

  return (
    <div className={rootClass}>{children || text}</div>
  );
}

Avatar.propTypes = propTypes;

export default withStyles(s)(Avatar);
