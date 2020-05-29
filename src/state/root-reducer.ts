import { combineReducers } from '@reduxjs/toolkit';
import users from './users.slice';
import properties from './properties.slice';

const rootReducer = combineReducers({
  users,
  properties,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
