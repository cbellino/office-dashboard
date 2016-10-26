/* @flow */

import React from 'react';
import ErrorPage from './ErrorPage';

export default {

  path: '/error',

  action({ error }: { error: Error }) {
    return {
      title: error.name,
      description: error.message,
      component: <ErrorPage error={error} />,
      status: error.status || 500,
    };
  },

};
