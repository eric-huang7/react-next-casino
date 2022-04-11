import {createAction} from "redux-actions";

export const setUserDepositValue = createAction("SET_INPUT_DEPOSIT_VALUE");
export const setErrorUserDepositValue = createAction("SET_ERROR_WRONG_DEPOSIT_VALUE");
export const setUserPaymentMethod = createAction("SET_USER_PAYMENT_METHOD");
export const setErrorUserPaymentMethod = createAction("SET_ERROR_WRONG_PAYMENT_METHOD");
export const setUserCurrencySwitcher = createAction("SET_USER_CURRENCY_SWITCHER");
export const setCurrencySelectorType = createAction("CURRENCY_SELECTOR_TYPE");
