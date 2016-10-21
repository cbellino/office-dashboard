import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './List.css';

const propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  empty: PropTypes.node.isRequired,
};

// TODO: display the owner
// TODO: display actions on hover (clear / edit)
// TODO: display column names
// TODO: order by
function List(props) {
  const { items, renderItem, empty } = props;

  return (
    <div className={s.root}>
      {items.length > 0 ? items.map(renderItem) : <div className={s.empty}>{empty}</div>}
    </div>
  );
}

List.propTypes = propTypes;

export default withStyles(s)(List);
