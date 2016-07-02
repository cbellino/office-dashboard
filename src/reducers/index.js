import { combineReducers } from 'redux';

import instances from './instances';
import people from './people';

export default combineReducers({
  instances,
  people,
});
