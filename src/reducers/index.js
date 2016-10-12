import { combineReducers } from 'redux';
import {
  PREVIEW_UPDATE_REQUESTED,
  PREVIEW_UPDATE_SUCCEEDED,
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

// TODO: use immutable data and refactor this.
function updateEntities(state, previews) {
  return Object.assign({}, state, {
    previews: Object.assign({}, state.previews, previews),
  });
}

const INITIAL_ENTITIES_STATE = {
  previews: {},
};

function entitiesReducer(state = INITIAL_ENTITIES_STATE, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_SUCCEEDED:
    case PREVIEW_UPDATE_REQUESTED:
      return updateEntities(state, action.payload.entities.previews);
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

function updateHomePreviews(state, items) {
  return Object.assign({}, state, {
    previews: {
      items,
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
      return updateHomePreviews(state, action.payload.result.previews);
    default:
      return state;
  }
}

/*
* Notification reducer.
*/

function updateNotification(state, notification) {
  return { ...notification, open: true };
}

const INITIAL_NOTIFICATION_STATE = {
  message: '',
  open: false,
};

function notificationReducer(state = INITIAL_NOTIFICATION_STATE, action) {
  switch (action.type) {
    case PREVIEW_UPDATE_SUCCEEDED:
      return updateNotification(state, action.payload.notification);
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
  notification: notificationReducer,
});

export default rootReducer;
