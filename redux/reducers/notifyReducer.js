import {SET_NOTIFICATIONS_2, SET_NOTIFICATIONS_3, SET_NOTIFICATIONS_4} from "../actions/types";



const initialState = {
  loading: true,
  messagesData: [],
  type_3: [],
  type_4: [],
}

function notifyReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_NOTIFICATIONS_2:
      return {
        ...state,
        messagesData: payload.msg,
        loading: false,
      }
    case SET_NOTIFICATIONS_3:
      if (typeof payload.msg === 'string') {
        let messageObj = JSON.parse(payload.msg)

        return {
          ...state,
          messagesData: [messageObj, ...state.messagesData],
          loading: false,
        }
      } else {
        let messageObj = payload.msg;

        return {
          ...state,
          messagesData: [messageObj, ...state.messagesData],
          loading: false,
        }
      }
    case SET_NOTIFICATIONS_4:
      if (typeof payload.msg === 'string') {
        let messageObj = JSON.parse(payload.msg)

        return {
          ...state,
          messagesData: [messageObj, ...state.messagesData],
          loading: false,
        }
      } else {
        let messageObj = payload.msg;

        return {
          ...state,
          messagesData: [messageObj, ...state.messagesData],
          loading: false,
        }
      }
    default:
      return state
  }
}

export default notifyReducer;