import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { fromJS } from 'immutable';
import InsertCssContext from '../../../../.storybook/InsertCssContext';
import Provider from '../../../../.storybook/Provider';

import InstancesList from '../InstancesList';

const instances = fromJS([
  { id: '1', manager: 'cbellino', comment: 'Molestias fugit inventore corporis' },
  { id: '2', comment: 'Perspiciatis quae quaerat magni' },
  { id: '3', comment: 'Facilis culpa earum sint' },
  { id: '4', manager: 'cbellino', comment: 'Tempora reiciendis corporis nesciunt' },
  { id: '5', manager: 'cbellino', comment: 'Placeat praesentium, architecto' },
]);

storiesOf('InstancesList', module)
  .addDecorator(Provider)
  .addDecorator(InsertCssContext)

  .add('default', () => (
    <InstancesList instances={instances} />
  ))

  .add('empty', () => (
    <InstancesList />
  ));
