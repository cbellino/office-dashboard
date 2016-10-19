// import { Map } from 'immutable';

const emptyPreview = {
  owner: '',
  comment: '',
  status: 'FREE',
};

// TODO: use immutable data
export function getEmptyPreview(id) {
  return Object.assign({}, emptyPreview, { id });
}

export function getInverseStatus(status) {
  return (status === 'FREE') ? 'BUSY' : 'FREE';
}
