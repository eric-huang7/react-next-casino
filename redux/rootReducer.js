import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang'
import sumInputReducer from './actions/sumInputChange'
import gameReducer from "./reducers/gamesReducer";

export const rootReducer = combineReducers({
  lang: langReducer,
  sumInput: sumInputReducer,
  games: gameReducer,
})