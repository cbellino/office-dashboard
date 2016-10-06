import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function Section(props) {
  const { title, children } = props;

  return (
    <div className={s.root}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.container}>{children}</div>
    </div>
  );
}

Section.propTypes = propTypes;

export default withStyles(s)(Section);
