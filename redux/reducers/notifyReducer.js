import {SET_NOTIFICATIONS_2, SET_NOTIFICATIONS_3, SET_NOTIFICATIONS_4, SET_NOTIFICATIONS_1} from "../actions/types";



const initialState = {
  loading: true,
  messagesData: [],
  type_1: [],
  type_3: [],
  type_4: [],
}

function notifyReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_NOTIFICATIONS_1:
      return {
        ...state,
        type_1: payload.ids,
        loading: false,
        messagesData: state.messagesData.map((el) => {
          let check = payload.ids.find((showEl) => {
            if (showEl === el.id || el.read === undefined) {
              return true;
            } else {
              return false;
            }
          })
          if (check) {
            return Object.defineProperty(el, 'read', {value: '1'});
          } else {
            return el;
          }
        })
      }
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
          messagesData: [...messageObj, ...state.messagesData],
          loading: false,
        }
      } else {
        let messageObj = payload.msg;

        return {
          ...state,
          messagesData: [...messageObj, ...state.messagesData],
          loading: false,
        }
      }
    case SET_NOTIFICATIONS_4:
      if (typeof payload.msg === 'string') {
        let messageObj = JSON.parse(payload.msg)

        return {
          ...state,
          messagesData: [...messageObj, ...state.messagesData],
          loading: false,
        }
      } else {
        let messageObj = payload.msg;

        return {
          ...state,
          messagesData: [...messageObj, ...state.messagesData],
          loading: false,
        }
      }
    default:
      return state
  }
}

export default notifyReducer;