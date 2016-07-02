import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';

const ProviderDecorator = (getStory) => (
  <Provider store={configureStore()}>
    {getStory()}
  </Provider>
);

export default ProviderDecorator;
