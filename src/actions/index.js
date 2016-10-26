/* @flow */

import * as api from '../data/api';

import type { Dispatch, Action, Preview } from '../types';

function fetchPreviewsRequest(): Action {
  return { type: 'PREVIEWS_FETCH_REQUESTED' };
}

function fetchPreviewsSuccess({ entities, result }): Action {
  return {
    type: 'PREVIEWS_FETCH_SUCCEEDED',
    payload: { entities, result },
  };
}

function fetchPreviewsFailure(error): Action {
  return { type: 'PREVIEWS_FETCH_FAILED', error };
}

export function fetchPreviews() {
  return (dispatch: Dispatch) => {
    dispatch(fetchPreviewsRequest());

    return api.fetchPreviews()
      .then((data) => dispatch(fetchPreviewsSuccess(data)))
      .catch((error) => dispatch(fetchPreviewsFailure(error)))
    ;
  };
}

function updatePreviewSuccess(preview): Action {
  return {
    type: 'PREVIEW_UPDATE_SUCCEEDED',
    // TODO: refactor the payload to look like this:
    // payload: {
    //   entities: { previews: { [preview.id]: preview } },
    // },
    payload: { preview },
  };
}

function updatePreviewSuccessNotification(preview): Action {
  return {
    type: 'NOTIFICATION_OPENED',
    payload: {
      notification: { message: `${preview.name} saved.` },
    },
  };
}

function updatePreviewFailure(error): Action {
  return { type: 'PREVIEW_UPDATE_FAILED', error };
}

export function updatePreview(preview: Preview) {
  return (dispatch: Dispatch) =>
    api.updatePreview(preview.id, preview)
      .then((data) => {
        const updatedPreview = data.entities.previews[preview.id];

        dispatch(updatePreviewSuccess(updatedPreview));
        dispatch(updatePreviewSuccessNotification(updatedPreview));
      })
      .catch((error) => dispatch(updatePreviewFailure(error)));
}

export function startEditingPreview(preview: Preview): Action {
  return {
    type: 'PREVIEW_EDIT_STARTED',
    payload: { preview },
  };
}

export function stopEditingPreview(preview: Preview): Action {
  return {
    type: 'PREVIEW_EDIT_STOPPED',
    payload: { preview },
  };
}
