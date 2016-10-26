/* @flow */

export const previewStatus = {
  FREE: 'FREE',
  BUSY: 'BUSY',
};

const emptyPreview = {
  owner: '',
  comment: '',
  status: previewStatus.FREE,
};

export function getInverseStatus(status: string) {
  return (status === previewStatus.FREE) ? previewStatus.BUSY : previewStatus.FREE;
}

export function getEmptyPreview(id: string) {
  return Object.assign({}, emptyPreview, { id });
}
