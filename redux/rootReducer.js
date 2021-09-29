import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang'
import sumInputReducer from './actions/sumInputChange'
import gameReducer from "./reducers/gamesReducer";
import winnersReducer from "./reducers/winnersReducer";

export const rootReducer = combineReducers({
  lang: langReducer,
  sumInput: sumInputReducer,
  games: gameReducer,
  winners: winnersReducer,
})