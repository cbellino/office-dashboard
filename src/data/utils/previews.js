/* @flow */

// import { Map } from 'immutable';

const emptyPreview = {
  owner: '',
  comment: '',
  status: 'FREE',
};

// TODO: use immutable data
export function getEmptyPreview(id: string) {
  return Object.assign({}, emptyPreview, { id });
}

export function getInverseStatus(status: string) {
  return (status === 'FREE') ? 'BUSY' : 'FREE';
}
