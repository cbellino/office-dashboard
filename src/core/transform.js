import { fromJS } from 'immutable';

export const snapshotToList = (list = []) => {
  return fromJS(list.val());
};
