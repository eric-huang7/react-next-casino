import {SET_NOTIFICATIONS_2, SET_NOTIFICATIONS_3, SET_NOTIFICATIONS_4, SET_NOTIFICATIONS_1} from "./types";


export const setNotifyTypeOne = (notifyData) => {
  return {
    type: SET_NOTIFICATIONS_1,
    payload: notifyData,
  }
}

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