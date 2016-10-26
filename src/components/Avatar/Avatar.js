/* @flow */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Avatar.css';

const propTypes = {
  children: PropTypes.node,
};

function Avatar(props) {
  const { children } = props;

  return (
    <div className={s.root}>{children}</div>
  );
}

Avatar.propTypes = propTypes;

export default withStyles(s)(Avatar);
