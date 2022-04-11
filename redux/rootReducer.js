import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './lang/reducer';
import gameReducer from "./games/reducer";
import winnersReducer from "./reducers/winnersReducer";
import jackpotsReducer from "./reducers/jackpotsReducer";
import uiReducer from "./ui/reducer";
import userReducer from "./user/reducer";
import playGameReducer from "./playGame/reducer";
import currencyReducer from "./currency/reducer";
import popupsReducer from './popups/reducer';
import userFinanceReducer from "./userFinance/reducer";
import bonusesReducer from "./bonuses/reducer";
import userBonusReducer from "./userBonus/reducer";
import userSubscriptionsReducer from "./userSubscriptions/reducer";
import notifyReducer from "./notify/reducer";
import tournamentsReducer from "./tournaments/reducer";
import depositsReducer from "./deposits/reducer";

export const rootReducer = combineReducers({
  lang: langReducer,
  userFinance: userFinanceReducer,
  games: gameReducer,
  winners: winnersReducer,
  jackpots: jackpotsReducer,
  ui: uiReducer,
  authInfo: userReducer,
  playGame: playGameReducer,
  currency : currencyReducer,
  popups : popupsReducer,
  bonuses: bonusesReducer,
  userBonus: userBonusReducer,
  userSubscriptions: userSubscriptionsReducer,
  notifications: notifyReducer,
  tournaments: tournamentsReducer,
  deposits: depositsReducer,
})
