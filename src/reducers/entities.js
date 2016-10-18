import { Map, fromJS } from 'immutable';

import {
  PREVIEW_UPDATE_REQUESTED,
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEWS_FETCH_FAILED,
} from '../constants/ActionTypes';

function logError(state, error) {
  console.error(error); // eslint-disable-line no-console
  return state;
}

/**
 * Updates multiple entities.
 */
function updateEntities(state, type, entities) {
  return state.mergeIn([type], entities.get(type));
}

const INITIAL_ENTITIES_STATE = Map({
  previews: Map(),
  someOtherEntities: Map(),
});

function entitiesReducer(state = INITIAL_ENTITIES_STATE, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_SUCCEEDED:
    case PREVIEW_UPDATE_REQUESTED:
      return updateEntities(state, 'previews', fromJS(action.payload.entities));
    case PREVIEWS_FETCH_FAILED:
      return logError(state, action.error);
    default:
      return state;
  }
}

export default entitiesReducer;
