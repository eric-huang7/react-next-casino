import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang';
import gameReducer from "./reducers/gamesReducer";
import winnersReducer from "./reducers/winnersReducer";
import jackpotsReducer from "./reducers/jackpotsReducer";
import showRegisterReducer from "./reducers/showRegisterReducer";
import showLoginReducer from "./reducers/showLoginReducer";
import authReducer from "./reducers/authReducer";
import playGameReducer from "./reducers/playGameReducer";
import getCurrency from "./reducers/currencyReducer";
import showMobileMenuReducer from "./reducers/showMobileMenuReducer";
import showPopupsReducer from './reducers/showPopupsReducer';
import setUserCurrencyReducer from './reducers/setUserCurrencySwitcherReducer';
import setUserPaymentMethodReducer from "./reducers/userPaymentMethodReducer";
import setUserDepositValueReducer from "./reducers/userDepositValueReduser";
import getBonuses from "./reducers/getBonuses";
import setUserBonusReducer from "./reducers/userBonuseReduser";
import userSubscriptionsDataReducer from "./reducers/userSubscriptionsDataReduser";
import notifyReducer from "./reducers/notifyReducer";


export const rootReducer = combineReducers({
  lang: langReducer,
  userDepositValue: setUserDepositValueReducer,
  games: gameReducer,
  winners: winnersReducer,
  jackpots: jackpotsReducer,
  showRegister: showRegisterReducer,
  showLogin: showLoginReducer,
  authInfo: authReducer,
  playGame: playGameReducer,
  getCurrency : getCurrency,
  showMobileMenu: showMobileMenuReducer,
  showPopupsReducer : showPopupsReducer,
  userSelectedCurrency: setUserCurrencyReducer,
  userPaymentMethod: setUserPaymentMethodReducer,
  bonuses: getBonuses,
  userBonus: setUserBonusReducer,
  userSubscriptionsData: userSubscriptionsDataReducer,
  notifications: notifyReducer,
})