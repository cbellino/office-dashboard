import React from 'react';
import Home from './Home';
import { fetchPreviews } from '../../data/api';

export default {

  path: '/',

  async action() {
    const previews = await fetchPreviews();

    return {
      title: 'Dashboard',
      component: <Home />,
    };
  },

};
