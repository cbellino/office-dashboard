import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { fromJS } from 'immutable';
import InsertCssContext from '../../../../.storybook/InsertCssContext';
import Provider from '../../../../.storybook/Provider';

import InstancesListItemContainer from '../../../containers/InstancesListItem';

const instance = fromJS({ id: '1', manager: 'cbellino', comment: 'Molestias fugit inventore corporis' });
const instanceWithoutManager = fromJS({ id: '1', comment: 'Molestias fugit inventore corporis' });

storiesOf('InstancesListItem', module)
  .addDecorator(Provider)
  .addDecorator(InsertCssContext)

  .add('default', () => (
    <InstancesListItemContainer instance={instance} />
  ))

  .add('no manager', () => (
    <InstancesListItemContainer instance={instanceWithoutManager} />
  ));
