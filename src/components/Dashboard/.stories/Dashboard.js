import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InsertCssContext from '../../../../.storybook/InsertCssContext';
import Provider from '../../../../.storybook/Provider';

import Dashboard from '../Dashboard';

storiesOf('Dashboard', module)
  .addDecorator(Provider)
  .addDecorator(InsertCssContext)

  .add('default', () => (
    <Dashboard>
      <h1>Dashboard content</h1>
    </Dashboard>
  ));
