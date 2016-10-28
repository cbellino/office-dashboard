import { Map } from 'immutable';

/*
 * Updates the notification content and opens it.
 */
function updateNotification(state, notification) {
  return state.merge(notification, Map({ open: true }));
}

const INITIAL_NOTIFICATION_STATE = Map({
  message: '',
  open: false,
});

function notificationReducer(state = INITIAL_NOTIFICATION_STATE, action) {
  switch (action.type) {
    case 'NOTIFICATION_OPENED':
      return updateNotification(state, Map(action.payload.notification));
    case 'NOTIFICATION_CLOSED':
      return INITIAL_NOTIFICATION_STATE;
    default:
      return state;
  }
}

export default notificationReducer;
