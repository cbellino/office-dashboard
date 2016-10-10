import {
  PREVIEWS_FETCH_REQUESTED,
  PREVIEWS_FETCH_SUCCEEDED,
  PREVIEWS_FETCH_FAILED,
} from '../constants/ActionTypes';
import * as api from '../data/api';

function fetchPreviewsRequest() {
  return { type: PREVIEWS_FETCH_REQUESTED };
}

function fetchPreviewsSuccess(previews) {
  return {
    type: PREVIEWS_FETCH_SUCCEEDED,
    payload: {
      previews,
    },
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
