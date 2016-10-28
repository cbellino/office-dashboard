/* @flow */

import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Navbar from '../Navbar';
import Notification from '../../containers/Notification';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const contextTypes = {
  userAgent: PropTypes.string.isRequired,
};

function Layout({ children }, context) {
  const muiTheme = getMuiTheme({
    /* palette: {
      primary1Color: green500,
      primary2Color: green700,
      primary3Color: green100,
    }, */
  }, {
    userAgent: context.userAgent,
  });

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Navbar />
        {React.Children.only(children)}
        <Notification />
      </div>
    </MuiThemeProvider>
  );
}

Layout.propTypes = propTypes;
Layout.contextTypes = contextTypes;

export default withStyles(s)(Layout);
