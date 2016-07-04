import { List } from 'immutable';

import { SET_INSTANCES } from '../constants';
import { firebaseDb } from '../core/firebase';
import { snapshotToList } from '../core/transform';

const instancesRef = firebaseDb.ref('instances');

export const setInstances = (instances = List.of()) => (
  { type: SET_INSTANCES, payload: instances }
);

export const startListeningToInstances = () => (
  dispatch => {
    // Sets the instances.
    instancesRef.on('value', (snapshot) => {
      const instances = snapshotToList(snapshot);
      dispatch(setInstances(instances));
    });
  }
);
