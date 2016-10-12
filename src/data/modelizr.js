import { model } from 'modelizr';

export const preview = model('previews', {
  id: { type: 'primary|string' },
  name: { type: 'string' },
  comment: { type: 'string' },
  owner: { type: 'string' },
  status: { type: 'string' },
});
