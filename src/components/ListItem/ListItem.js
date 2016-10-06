import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListItem.css';

const propTypes = {
  item: PropTypes.shape({}).isRequired,
  avatar: PropTypes.node,
  strip: PropTypes.node,
};

const defaultProps = {};

function ListItem(props) {
  const { item, avatar, strip } = props;

  return (
    <div className={s.root}>
      <div className={s.container}>
        {(avatar || strip) ? (
          <div className={s.avatar}>
            {avatar}
            {strip}
          </div>
        ) : null}
        <div className={s.content}>
          <div className={s.itemTitle}>{item.title}</div>
          <div className={s.itemContent}>{item.content}</div>
        </div>
      </div>
    </div>
  );
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default withStyles(s)(ListItem);
