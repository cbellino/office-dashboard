/* @flow */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Avatar from '../Avatar';
import s from './Navbar.css';

function Navbar() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Avatar>AYL</Avatar>
      </div>
    </div>
  );
}

export default withStyles(s)(Navbar);
