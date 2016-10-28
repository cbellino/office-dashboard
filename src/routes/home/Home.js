/* @flow */

import React, { Component, PropTypes } from 'react';
import Layout from '../../components/Layout';
import PreviewSection from '../../containers/PreviewSection';
import { prefetchPreviews } from '../../actions';

const contextTypes = {
  store: PropTypes.object.isRequired,
};

class Home extends Component {

  static fetchData = [prefetchPreviews];

  render() {
    return (
      <Layout>
        <div>
          <PreviewSection />
        </div>
      </Layout>
    );
  }
}

Home.contextTypes = contextTypes;

export default Home;
