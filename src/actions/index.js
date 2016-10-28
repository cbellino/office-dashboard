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

function fetchPreviewsPromise(dispatch) {
  dispatch(fetchPreviewsRequest());

  return new Promise((resolve, reject) => {
    api.fetchPreviews()
      .then((data) => {
        dispatch(fetchPreviewsSuccess(data));
        resolve(data);
      })
      .catch((error) => {
        dispatch(fetchPreviewsFailure(error));
        reject(error);
      });
  });
}

export function fetchPreviews() {
  return (dispatch: Dispatch) => fetchPreviewsPromise(dispatch);
}

export function prefetchPreviews(dispatch) {
  return fetchPreviewsPromise(dispatch);
}

function updatePreviewRequest(preview): Action {
  return {
    type: 'PREVIEW_UPDATE_REQUESTED',
    payload: { preview },
  };
}

function updatePreviewSuccess(preview): Action {
  return {
    type: 'PREVIEW_UPDATE_SUCCEEDED',
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

/**
 * Sends a notification when the previews failed to load.
 */
export function fetchHomePreviewsFailureNotification() {
  return {
    type: 'NOTIFICATION_OPENED',
    payload: {
      notification: { message: 'Failed to fetch the previews.' },
    },
  };
}

function updatePreviewFailure(error): Action {
  return { type: 'PREVIEW_UPDATE_FAILED', error };
}

export function hideNotification(): Action {
  return { type: 'NOTIFICATION_CLOSED' };
}

export function updatePreview(preview: Preview) {
  return (dispatch: Dispatch) => {
    dispatch(updatePreviewRequest(preview));

    api.updatePreview(preview.id, preview)
      .then((data) => {
        const updatedPreview = data.entities.previews[preview.id];

        dispatch(updatePreviewSuccess(updatedPreview));
        dispatch(updatePreviewSuccessNotification(updatedPreview));

        return Promise.resolve(data);
      })
      .catch((error) => {
        dispatch(updatePreviewFailure(error));
        return Promise.reject(error);
      });
  };
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
