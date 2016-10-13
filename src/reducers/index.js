import { combineReducers } from 'redux';
import {
  PREVIEW_UPDATE_REQUESTED,
  PREVIEW_UPDATE_SUCCEEDED,
  PREVIEWS_FETCH_REQUESTED,
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEWS_FETCH_FAILED,
  PREVIEW_EDIT_STARTED,
  PREVIEW_EDIT_STOPPED,
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
    states: {},
    isFetching: true,
  },
};

const INITIAL_PREVIEW_STATE = {
  isEditing: false,
};

function updateHomePreviews(state, items) {
  const initialStates = Object.assign(...items.map(item => (
    { [item]: Object.assign({}, INITIAL_PREVIEW_STATE) }
  )));

  return Object.assign({}, state, {
    previews: {
      items,
      states: Object.assign({}, state.previews.states, initialStates),
      isFetching: false,
    },
  });
}

function fetchHomePreviews(state) {
  const newState = Object.assign({}, state);
  newState.previews.isFetching = true;

  return newState;
}

function setPreviewState(state, preview, key, value) {
  const newState = Object.assign({}, state);
  newState.previews.states[preview.id][key] = value;

  return newState;
}

function homeReducer(state = INITIAL_HOME_STATE, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_REQUESTED:
      return fetchHomePreviews(state, action.payload);
    case PREVIEWS_FETCH_SUCCEEDED:
      return updateHomePreviews(state, action.payload.result.previews);
    case PREVIEW_EDIT_STARTED:
      return setPreviewState(state, action.payload.preview, 'isEditing', true);
    case PREVIEW_EDIT_STOPPED:
      return setPreviewState(state, action.payload.preview, 'isEditing', false);
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
