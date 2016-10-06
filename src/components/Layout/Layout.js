/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Navbar from '../Navbar';
// import Header from '../Header'; // TODO: remove this component's files
// import Feedback from '../Feedback'; // TODO: remove this component's files
// import Footer from '../Footer'; // TODO: remove this component's files

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {React.Children.only(children)}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withStyles(s)(Layout);
