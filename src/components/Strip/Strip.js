import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Strip.css';

const propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

const defaultProps = {
  variant: 'success',
};

function Strip(props) {
  const { children, variant } = props;
  const rootClass = classNames({
    [s.root]: true,
    [s.error]: variant === 'error',
    [s.success]: variant === 'success',
  });

  return (
    <div className={rootClass}>
      <div className={s.container}>{children}</div>
    </div>
  );
}

Strip.propTypes = propTypes;
Strip.defaultProps = defaultProps;

export default withStyles(s)(Strip);
