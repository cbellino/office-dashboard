import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

function Section(props) {
  const { title, loading, children } = props;

  return (
    <div className={s.root}>
      <h2 className={s.title}>{title}</h2>
      {loading ? (
        <div className={s.loading}>
          <CircularProgress size={80} thickness={5} />
        </div>
      ) : (
        <div className={s.container}>{children}</div>
      )}
    </div>
  );
}

Section.propTypes = propTypes;

export default withStyles(s)(Section);
