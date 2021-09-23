import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang'
import sumInputReducer from './actions/sumInputChange'

export const rootReducer = combineReducers({
  lang: langReducer,
  sumInput: sumInputReducer,
})