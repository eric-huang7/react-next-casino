import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang'
import sumInputReducer from './actions/sumInputChange'
import gameReducer from "./reducers/gamesReducer";
import winnersReducer from "./reducers/winnersReducer";
import showRegisterReducer from "./reducers/showRegisterReducer";
import showLoginReducer from "./reducers/showLoginReducer";
import authReducer from "./reducers/authReducer";

export const rootReducer = combineReducers({
  lang: langReducer,
  sumInput: sumInputReducer,
  games: gameReducer,
  winners: winnersReducer,
  showRegister: showRegisterReducer,
  showLogin: showLoginReducer,
  authInfo: authReducer,
})