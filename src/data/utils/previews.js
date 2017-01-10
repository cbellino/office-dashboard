/* @flow */

export const previewStatus = {
  FREE: 'FREE',
  BUSY: 'BUSY',
};

export const previewOwners = {
  'f7ce41f7-48ac-443a-8424-3cc1abf3e375': {
    id: 'f7ce41f7-48ac-443a-8424-3cc1abf3e375',
    name: 'jbAdyoulike',
    displayName: 'JB',
    avatar: 'https://avatars1.githubusercontent.com/u/5862005?v=3&amp;s=72',
  },
  '7ae68656-8eff-4e96-b450-9225a9fbfb1f': {
    id: '7ae68656-8eff-4e96-b450-9225a9fbfb1f',
    name: 'chrisg93',
    displayName: 'Christophe',
    avatar: 'https://avatars3.githubusercontent.com/u/1113757?v=3&s=72',
  },
  '800c9877-de95-4eb8-a908-638088c15ce3': {
    id: '800c9877-de95-4eb8-a908-638088c15ce3',
    name: 'florenthemmi',
    displayName: 'Florent',
    avatar: 'https://avatars3.githubusercontent.com/u/4488419?v=3&amp;s=72',
  },
  'fa607f1f-79f6-4387-854a-83accfdf5f8b': {
    id: 'fa607f1f-79f6-4387-854a-83accfdf5f8b',
    name: 'cbellino',
    displayName: 'Colin',
    avatar: 'https://avatars0.githubusercontent.com/u/622180?v=3&amp;s=72',
  },
  'f251fefa-d886-4b5c-bfbc-f590fe170819': {
    id: 'f251fefa-d886-4b5c-bfbc-f590fe170819',
    name: 'silvin',
    displayName: 'Silvin',
    avatar: 'https://avatars2.githubusercontent.com/u/13131918?v=3&amp;s=72',
  },
  '087eaf5a-2e20-4e64-8bb6-d436f80d1e88': {
    id: '087eaf5a-2e20-4e64-8bb6-d436f80d1e88',
    name: 'mehdi',
    displayName: 'Mehdi',
    avatar: 'https://avatars2.githubusercontent.com/u/8351346?v=3&amp;s=72',
  },
  'dfadc8c3-7c12-4844-8bb2-89f25100af70': {
    id: 'dfadc8c3-7c12-4844-8bb2-89f25100af70',
    name: 'trungutt',
    displayName: 'Trung',
    avatar: 'https://avatars1.githubusercontent.com/u/18528548?v=3&amp;s=72',
  },
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
