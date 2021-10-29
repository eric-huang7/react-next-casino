import {SET_ERROR_WRONG_DEPOSIT_VALUE, SET_INPUT_DEPOSIT_VALUE, SET_USER_BONUS} from "../actions/types";

const initialState = {
  bonus_id: null,

}

function setUserBonusReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_USER_BONUS :
      return {
        ...state,
        value: payload,
      }

    default :
      return state
  }
}

export default setUserBonusReducer;