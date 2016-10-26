/* @flow */

import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
} from 'redux';

import type {
  Map as ImmutableMap,
} from 'immutable';

export type Id = string;

export type PreviewStatus = 'FREE' | 'BUSY';

export type Preview = {
  id: Id,
  name: string,
  url: string,
  comment: string,
  owner: string,
  status: PreviewStatus,
}

export type SectionState = {
  isEditing: bool,
}

export type Section = {
  items: Id[],
  states: { [key: Id]: SectionState },
  isFetching: boolean,
}

export type Home = {
  previews: Section[],
}

export type Notification = {
  message: string,
  open: boolean,
}

export type Entities = {
  previews: { [key: Id]: Preview },
}

export type Result = any; // TODO

export type FetchPayload = {
  entities: Entities,
  result: Result,
};

export type UpdateRequestPayload = {
  entities: Entities,
};

export type UpdateSuccessPayload = {
  entities: Entities,
};

export type NotificationPayload = {
  notification: {
    message: string
  },
}

export type State = ImmutableMap<string, any>;

export type DispatchFn = (dispatch: ReduxDispatch) => any;

export type Action =
    { type: 'PREVIEWS_FETCH_REQUESTED' }
  | { type: 'PREVIEWS_FETCH_SUCCEEDED', payload: FetchPayload }
  | { type: 'PREVIEWS_FETCH_FAILED', error: Error }
  | { type: 'PREVIEW_UPDATE_SUCCEEDED', payload: { preview: Preview } }
  | { type: 'NOTIFICATION_OPENED', payload: NotificationPayload }
  | { type: 'PREVIEW_UPDATE_FAILED', error: Error }
  | { type: 'PREVIEW_EDIT_STARTED', payload: { preview: Preview } }
  | { type: 'PREVIEW_EDIT_STOPPED', payload: { preview: Preview } }
  | DispatchFn
;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
