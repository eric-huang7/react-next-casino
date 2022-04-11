import {handleActions} from "redux-actions";
import {setUserBonus, setUserRegisterBonusCode} from "./action";

const initialState = {
  bonus_id: null,
  value: 0,
  bonus_code: null,
}

const handlers = {
  [setUserBonus]: (state, {payload}) => {
    return {
      ...state,
      bonus_id: payload,
    }
  },
  [setUserRegisterBonusCode]: (state, {payload}) => {
    return {
      ...state,
      bonus_code: payload,
    }
  },
}

export default handleActions(handlers, initialState);
