import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang'
import sumInputReducer from './actions/sumInputChange'
import gameReducer from "./reducers/gamesReducer";
import winnersReducer from "./reducers/winnersReducer";
import jackpotsReducer from "./reducers/jackpotsReducer";
import showRegisterReducer from "./reducers/showRegisterReducer";
import showLoginReducer from "./reducers/showLoginReducer";
import authReducer from "./reducers/authReducer";
import playGameReducer from "./reducers/playGameReducer";
import getCurrency from "./reducers/currencyReducer";


export const rootReducer = combineReducers({
  lang: langReducer,
  sumInput: sumInputReducer,
  games: gameReducer,
  winners: winnersReducer,
  jackpots: jackpotsReducer,
  showRegister: showRegisterReducer,
  showLogin: showLoginReducer,
  authInfo: authReducer,
  playGame: playGameReducer,
  getCurrency : getCurrency,
})