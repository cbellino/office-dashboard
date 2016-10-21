import { Map, List } from 'immutable';
import {
  PREVIEWS_FETCH_REQUESTED,
  PREVIEWS_FETCH_FAILED,
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEW_EDIT_STARTED,
  PREVIEW_EDIT_STOPPED,
  NOTIFICATION_OPENED,
} from '../constants/ActionTypes';

const INITIAL_HOME_STATE = Map({
  previews: Map({
    items: List(),
    states: Map(),
    isFetching: true,
  }),
});

const INITIAL_PREVIEW_STATE = Map({
  isEditing: false,
});

/**
 * Sets the isFetching status for the home previews.
 */
function fetchHomePreviews(state) {
  return state.setIn(['previews', 'isFetching'], true);
}

/**
 * Updates the home previews items, states and isFetching status.
 */
function updateHomePreviews(state, items) {
  const states = Map(items.map(item => [item, INITIAL_PREVIEW_STATE]));
  return state
    .setIn(['previews', 'items'], items)
    .setIn(['previews', 'isFetching'], false)
    .mergeIn(['previews', 'states'], states);
}

/**
 * Merges a specific preview's state.
 */
function mergePreviewState(state, preview, previewState) {
  return state.mergeIn(['previews', 'states', preview.id], previewState);
}

/**
 * Sends a notification when the previews failed to load.
 */
function fetchHomePreviewsFailureNotification() {
  return {
    type: NOTIFICATION_OPENED,
    payload: {
      notification: { message: 'Failed to fetch the previews.' },
    },
  };
}

function homeReducer(state = INITIAL_HOME_STATE, action) {
  switch (action.type) {
    case PREVIEWS_FETCH_REQUESTED:
      return fetchHomePreviews(state, action.payload);
    case PREVIEWS_FETCH_FAILED:
      return fetchHomePreviewsFailureNotification(state);
    case PREVIEWS_FETCH_SUCCEEDED:
      return updateHomePreviews(state, action.payload.result.previews);
    case PREVIEW_EDIT_STARTED:
      return mergePreviewState(state, action.payload.preview, Map({ isEditing: true }));
    case PREVIEW_EDIT_STOPPED:
      return mergePreviewState(state, action.payload.preview, Map({ isEditing: false }));
    default:
      return state;
  }
}

export default homeReducer;
