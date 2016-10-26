import { Map, fromJS } from 'immutable';

import {
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEW_UPDATE_REQUESTED,
  PREVIEW_UPDATE_SUCCEEDED,
} from '../constants/ActionTypes';

/**
 * Updates multiple entities.
 */
function updateEntities(state, type, entities) {
  return state.mergeIn([type], entities.get(type));
}

/**
 * Merges the props of a single entity.
 */
function mergeEntity(state, type, entity) {
  return state.mergeIn([type, entity.get('id')], entity);
}

/**
 * Updates a single entity.
 */
function updateEntity(state, type, entity) {
  return state.setIn([type, entity.get('id')], entity);
}

const INITIAL_ENTITIES_STATE = Map({
  previews: Map(),
});

function entitiesReducer(state = INITIAL_ENTITIES_STATE, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_SUCCEEDED:
      return updateEntities(state, 'previews', fromJS(action.payload.entities));
    case PREVIEW_UPDATE_REQUESTED:
      return mergeEntity(state, 'previews', Map(action.payload.preview));
    case PREVIEW_UPDATE_SUCCEEDED:
      return updateEntity(state, 'previews', Map(action.payload.preview));
    default:
      return state;
  }
}

export default entitiesReducer;
