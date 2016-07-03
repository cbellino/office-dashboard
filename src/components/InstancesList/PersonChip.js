import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';

import { PersonPropType } from './PropTypes';
import s from './PersonChip.css';

const PersonChip = ({ person, className }) => {
  const rootClass = classNames(className, s.root);

  return (
    <div className={rootClass}>
      <img
        src={person.get('avatar')}
        alt={person.get('username')}
      />
    </div>
  );
};

PersonChip.propTypes = {
  person: PersonPropType.isRequired,
  className: PropTypes.string,
};

export default withStyles(s)(PersonChip);
