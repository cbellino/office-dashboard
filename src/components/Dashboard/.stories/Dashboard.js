import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InsertCssContext from '../../../../.storybook/InsertCssContext';

import Dashboard from '../Dashboard';
import s from '../Dashboard.css';

storiesOf('Dashboard', module)
  .addDecorator(InsertCssContext.bind(null, s))

  .add('default', () => (
    <Dashboard>
      <h1>Dashboard content</h1>
    </Dashboard>
  ));
