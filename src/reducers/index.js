import { combineReducers } from 'redux';
import {
  PREVIEWS_FETCH_REQUESTED,
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

const INITIAL_ENTITIES_STATE = {
  previews: {},
};

function entitiesReducer(state = INITIAL_ENTITIES_STATE, action) {
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
* Previews for the home component.
*/

const INITIAL_HOME_STATE = {
  previews: {
    items: [],
    isFetching: true,
    isEditing: null,
  },
};

function updateHomePreviews(state, payload) {
  return Object.assign({}, state, {
    previews: {
      items: payload.previews.map((preview) => preview.id),
      isFetching: false,
      isEditing: null,
    },
  });
}

function fetchHomePreviews(state) {
  const newState = state;
  newState.previews.isFetching = true;

  return newState;
}

function homeReducer(state = INITIAL_HOME_STATE, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_REQUESTED:
      return fetchHomePreviews(state, action.payload);
    case PREVIEWS_FETCH_SUCCEEDED:
      return updateHomePreviews(state, action.payload);
    default:
      return state;
  }
}

/*
* Root reducer.
*/

const rootReducer = combineReducers({
  entities: entitiesReducer,
  home: homeReducer,
});

export default rootReducer;
