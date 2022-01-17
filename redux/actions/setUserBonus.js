import {SET_USER_BONUS, SET_USER_BONUS_CODE} from "./types";


export const setUserBonus = (userBonusValue) => {
  return {
    type: SET_USER_BONUS,
    payload: userBonusValue,
  }
}

export const setUserRegisterBonusCode = (bonusCodeValue) => {
  return {
    type: SET_USER_BONUS_CODE,
    payload: bonusCodeValue,
  }
}