import { Map, fromJS } from 'immutable';

import {
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEW_UPDATE_SUCCEEDED,
} from '../constants/ActionTypes';

/**
 * Updates multiple entities.
 */
function updateEntities(state, type, entities) {
  return state.mergeIn([type], entities.get(type));
}

/**
 * Updates a single entity.
 */
function updateEntity(state, type, entity) {
  return state.setIn([type, entity.get('id')], entity);
}

const INITIAL_ENTITIES_STATE = Map({
  previews: Map(),
  someOtherEntities: Map(),
});

function entitiesReducer(state = INITIAL_ENTITIES_STATE, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_SUCCEEDED:
      return updateEntities(state, 'previews', fromJS(action.payload.entities));
    case PREVIEW_UPDATE_SUCCEEDED:
      return updateEntity(state, 'previews', Map(action.payload.preview));
    default:
      return state;
  }
}

export default entitiesReducer;
