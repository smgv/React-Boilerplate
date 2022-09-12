import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './features/eg-counter/eg-counter.slice';
import userReducer from './features/eg-user-thunk/eg-user-thunk.slice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});
