import {
  SET_USER_BONUS,
  SET_USER_BONUS_CODE
} from "../actions/types";

const initialState = {
  bonus_id: null,
  value: 0,
  bonus_code: null,
}

function setUserBonusReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_USER_BONUS :
      return {
        ...state,
        bonus_id: payload,
      }
    case SET_USER_BONUS_CODE:
      return {
        ...state,
        bonus_code: payload,
      }
    default :
      return state
  }
}

export default setUserBonusReducer;