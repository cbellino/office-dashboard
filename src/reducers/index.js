import { combineReducers } from 'redux';
import {
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEWS_FETCH_FAILED,
} from '../constants/ActionTypes';

function logError(state, error) {
  console.error(error); // eslint-disable-line no-console
}

/*
* Entities reducer.
*/

function updateEntities(state, payload) {
  const previews = Object.assign(...Object.entries(payload.previews)
    .map(([index, val]) => ({ [val.id]: val })) // eslint-disable-line no-unused-vars
  );

  return Object.assign({}, state, { previews });
}

const INITIAL_ENTITIES = {
  previews: {},
};

function entitiesReducer(state = INITIAL_ENTITIES, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_SUCCEEDED:
      return updateEntities(state, action.payload);
    case PREVIEWS_FETCH_FAILED:
      return logError(state, action.error);
    default:
      return state;
  }
}

/*
* Previews per page reducer.
*/

function updatePreviewsPerPage(state, payload) {
  const page = 1;

  return Object.assign({}, state, {
    [page]: {
      items: payload.previews.map((preview) => preview.id),
      isFetching: false,
    },
  });
}

function previewsPerPageReducer(state = {}, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_SUCCEEDED:
      return updatePreviewsPerPage(state, action.payload);
    default:
      return state;
  }
}

/*
* Root reducer.
*/

const rootReducer = combineReducers({
  entities: entitiesReducer,
  previewsPerPage: previewsPerPageReducer,
});

export default rootReducer;
