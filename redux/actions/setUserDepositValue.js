import {SET_ERROR_WRONG_DEPOSIT_VALUE, SET_INPUT_DEPOSIT_VALUE} from "./types";

export const setUserDepositValue = (userDepositValue) => {
  return {
    type: SET_INPUT_DEPOSIT_VALUE,
    payload: userDepositValue,
  }
}

export const setErrorUserDepositValue = (errorMessage) => {
  return {
    type : SET_ERROR_WRONG_DEPOSIT_VALUE,
    payload: errorMessage,
  }
}