import { combineReducers } from "@reduxjs/toolkit";

import langReducer from './actions/lang';
import gameReducer from "./games/reducer";
import winnersReducer from "./reducers/winnersReducer";
import jackpotsReducer from "./reducers/jackpotsReducer";
import showRegisterReducer from "./reducers/showRegisterReducer";
import showLoginReducer from "./reducers/showLoginReducer";
import userReducer from "./user/reducer";
import playGameReducer from "./playGame/reducer";
import currencyReducer from "./currency/reducer";
import showMobileMenuReducer from "./reducers/showMobileMenuReducer";
import popupsReducer from './popups/reducer';
import setUserCurrencyReducer from './reducers/setUserCurrencySwitcherReducer';
import setUserPaymentMethodReducer from "./reducers/userPaymentMethodReducer";
import setUserDepositValueReducer from "./reducers/userDepositValueReduser";
import bonusesReducer from "./bonuses/reducer";
import userBonusReducer from "./userBonus/reducer";
import userSubscriptionsReducer from "./userSubscriptions/reducer";
import notifyReducer from "./notify/reducer";
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
  popups : popupsReducer,
  userSelectedCurrency: setUserCurrencyReducer,
  userPaymentMethod: setUserPaymentMethodReducer,
  bonuses: bonusesReducer,
  userBonus: userBonusReducer,
  userSubscriptions: userSubscriptionsReducer,
  notifications: notifyReducer,
  mayBrowserNotify: mayBrowserNotifyReducer,
  tournaments: tournamentsReducer,
  deposits: depositsReducer,
  currencySelectorType: currencySelectorTypeReducer,
  showPlayWindowReducer: showPlayWindowReducer
})
