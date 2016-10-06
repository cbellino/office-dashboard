import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './List.css';

const propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

// TODO: display the owner
// TODO: display actions on hover (clear / edit)
// TODO: display column names
// TODO: order by
function List(props) {
  const { items, renderItem } = props;

  return (
    <div className={s.root}>
      <div className={s.container}>
        {items.map(renderItem)}
      </div>
    </div>
  );
}

List.propTypes = propTypes;

export default withStyles(s)(List);
