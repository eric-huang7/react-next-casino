import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang'


export const rootReducer = combineReducers({
  lang: langReducer,
})