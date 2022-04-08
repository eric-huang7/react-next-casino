import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang';
import gameReducer from "./games/reducer";
import winnersReducer from "./reducers/winnersReducer";
import jackpotsReducer from "./reducers/jackpotsReducer";
import showRegisterReducer from "./reducers/showRegisterReducer";
import showLoginReducer from "./reducers/showLoginReducer";
import userReducer from "./user/reducer";
import playGameReducer from "./reducers/playGameReducer";
import currencyReducer from "./currency/reducer";
import showMobileMenuReducer from "./reducers/showMobileMenuReducer";
import showPopupsReducer from './reducers/showPopupsReducer';
import setUserCurrencyReducer from './reducers/setUserCurrencySwitcherReducer';
import setUserPaymentMethodReducer from "./reducers/userPaymentMethodReducer";
import setUserDepositValueReducer from "./reducers/userDepositValueReduser";
import bonusesReducer from "./bonuses/reducer";
import setUserBonusReducer from "./reducers/userBonuseReduser";
import userSubscriptionsDataReducer from "./reducers/userSubscriptionsDataReduser";
import notifyReducer from "./reducers/notifyReducer";
import mayBrowserNotifyReducer from "./reducers/mayBrowserNotifyReducer";
import tournamentsReducer from "./tournaments/reducer";
import depositsReducer from "./deposits/reducer";
import currencySelectorTypeReducer from "./reducers/currencySelectorTypeReducer";
import showPlayWindowReducer from "./reducers/showPlayWindowReducer";


export const rootReducer = combineReducers({
  lang: langReducer,
  userDepositValue: setUserDepositValueReducer,
  games: gameReducer,
  winners: winnersReducer,
  jackpots: jackpotsReducer,
  showRegister: showRegisterReducer,
  showLogin: showLoginReducer,
  authInfo: userReducer,
  playGame: playGameReducer,
  currency : currencyReducer,
  showMobileMenu: showMobileMenuReducer,
  showPopupsReducer : showPopupsReducer,
  userSelectedCurrency: setUserCurrencyReducer,
  userPaymentMethod: setUserPaymentMethodReducer,
  bonuses: bonusesReducer,
  userBonus: setUserBonusReducer,
  userSubscriptionsData: userSubscriptionsDataReducer,
  notifications: notifyReducer,
  mayBrowserNotify: mayBrowserNotifyReducer,
  tournaments: tournamentsReducer,
  deposits: depositsReducer,
  currencySelectorType: currencySelectorTypeReducer,
  showPlayWindowReducer: showPlayWindowReducer
})
