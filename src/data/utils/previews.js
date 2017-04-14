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
  'c6da0ce2-40a0-49b1-a39b-4cbc8c397140': {
    id: 'c6da0ce2-40a0-49b1-a39b-4cbc8c397140',
    name: 'IamTossan',
    displayName: 'Albert',
    avatar: 'https://avatars3.githubusercontent.com/u/21175850?v=3&s=72',
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
  'b187d04a-5652-4056-a3ec-2ad79991db61': {
    id: 'b187d04a-5652-4056-a3ec-2ad79991db61',
    name: 'francois-b',
    displayName: 'Francois',
    avatar: 'https://avatars2.githubusercontent.com/u/973692?v=3&s=72',
  },
  'dfadc8c3-7c12-4844-8bb2-89f25100af70': {
    id: 'dfadc8c3-7c12-4844-8bb2-89f25100af70',
    name: 'trungutt',
    displayName: 'Trung',
    avatar: 'https://avatars1.githubusercontent.com/u/18528548?v=3&amp;s=72',
  },
  '363dc382-0498-4189-bc75-98237e7ff0eb': {
    id: '363dc382-0498-4189-bc75-98237e7ff0eb',
    name: 'dns-gh',
    displayName: 'Dimitri',
    avatar: 'https://avatars1.githubusercontent.com/u/10922555?v=3&amp;s=72',
  },
  'bf0cad28-2409-464f-8b19-07de58e0c393': {
    id: 'bf0cad28-2409-464f-8b19-07de58e0c393',
    name: 'othko',
    displayName: 'Tierry',
    avatar: 'https://avatars1.githubusercontent.com/u/25504649?v=3&s=72',
  },
  'bf0cad28-2409-464f-8b19-07de58e0c394': {
    id: 'bf0cad28-2409-464f-8b19-07de58e0c394',
    name: 'jendigital',
    displayName: 'Jennifer',
    avatar: 'https://avatars0.githubusercontent.com/u/23497044?v=3&s=72',
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
