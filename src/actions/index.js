import {
  PREVIEWS_FETCH_REQUESTED,
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEWS_FETCH_FAILED,
  PREVIEW_UPDATE_REQUESTED,
  PREVIEW_UPDATE_SUCCEEDED,
  PREVIEW_UPDATE_FAILED,
  PREVIEW_EDIT_STARTED,
  PREVIEW_EDIT_STOPPED,
} from '../constants/ActionTypes';
import * as api from '../data/api';

function fetchPreviewsRequest() {
  return { type: PREVIEWS_FETCH_REQUESTED };
}

function fetchPreviewsSuccess({ entities, result }) {
  return {
    type: PREVIEWS_FETCH_SUCCEEDED,
    payload: { entities, result },
  };
}

function fetchPreviewsFailure(error) {
  return { type: PREVIEWS_FETCH_FAILED, error };
}

export function fetchPreviews() {
  return (dispatch) => {
    dispatch(fetchPreviewsRequest());

    return api.fetchPreviews()
      .then((data) => dispatch(fetchPreviewsSuccess(data)))
      .catch((error) => dispatch(fetchPreviewsFailure(error)))
    ;
  };
}

function updatePreviewRequest(preview) {
  return {
    type: PREVIEW_UPDATE_REQUESTED,
    payload: {
      entities: { previews: { [preview.id]: preview } },
    },
  };
}

function updatePreviewSuccess(preview) {
  return {
    type: PREVIEW_UPDATE_SUCCEEDED,
    payload: { preview, notification: { message: 'Preview saved.' } },
  };
}

function updatePreviewFailure(error) {
  return { type: PREVIEW_UPDATE_FAILED, error };
}

export function updatePreview(preview) {
  return (dispatch) => {
    dispatch(updatePreviewRequest(preview));

    return api.updatePreview(preview.id, preview)
      .then((data) => dispatch(updatePreviewSuccess(data)))
      .catch((error) => dispatch(updatePreviewFailure(error)))
    ;
  };
}

export function startEditingPreview(preview) {
  return {
    type: PREVIEW_EDIT_STARTED,
    payload: { preview },
  };
}

export function stopEditingPreview(preview) {
  return {
    type: PREVIEW_EDIT_STOPPED,
    payload: { preview },
  };
}
