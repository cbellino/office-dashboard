/* @flow */

import { model } from 'modelizr';

const preview = model('previews', {
  id: { type: 'primary|string' },
  name: { type: 'string' },
  url: { type: 'string' },
  comment: { type: 'string' },
  owner: { type: 'string' },
  status: { type: 'string' },
});

export default preview;
