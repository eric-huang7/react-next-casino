import {SET_NOTIFICATIONS_2, SET_NOTIFICATIONS_3, SET_NOTIFICATIONS_4} from "./types";


export const setNotifyTypeTwo = (notifyData) => {
  return {
    type: SET_NOTIFICATIONS_2,
    payload: notifyData,
  }
}

export const setNotifyTypeThree = (notifyData) => {
  return {
    type: SET_NOTIFICATIONS_3,
    payload: notifyData,
  }
}

export const setNotifyTypeFour = (notifyData) => {
  return {
    type: SET_NOTIFICATIONS_4,
    payload: notifyData,
  }
}