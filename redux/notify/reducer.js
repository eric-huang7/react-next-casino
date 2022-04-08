import {handleActions} from "redux-actions";
import {setNotifyTypeFour, setNotifyTypeOne, setNotifyTypeThree, setNotifyTypeTwo} from "./notify";

const initialState = {
  loading: true,
  messagesData: [],
  type_1: [],
  type_3: [],
  type_4: [],
}

const handlers = {
  [setNotifyTypeOne]: (state, {payload}) => {
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
  },
  [setNotifyTypeTwo]: (state, {payload}) => {
    return {
      ...state,
      messagesData: payload.msg,
      loading: false,
    }
  },
  [setNotifyTypeThree]: (state, {payload}) => {
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
  },
  [setNotifyTypeFour]: (state, {payload}) => {
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
  },
}

export default handleActions(handlers, initialState);
