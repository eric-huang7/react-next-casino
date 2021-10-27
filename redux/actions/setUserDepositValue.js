import {SET_INPUT_DEPOSIT_VALUE} from "./types";



export const setUserDepositValue = (userDepositValue) => {
  return {
    type: SET_INPUT_DEPOSIT_VALUE,
    payload: userDepositValue,
  }
}