import {SET_USER_BONUS} from "./types";


export const setUserBonus = (userDepositValue) => {
  return {
    type: SET_USER_BONUS,
    payload: userDepositValue,
  }
}