import {SET_ERROR_WRONG_DEPOSIT_VALUE, SET_INPUT_DEPOSIT_VALUE} from "../actions/types";

const initialState = {
  value: 30.00,
  errorMessage: ''
};

function setUserDepositValueReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_INPUT_DEPOSIT_VALUE :
      return {
        ...state,
        value: payload,
      }
    case SET_ERROR_WRONG_DEPOSIT_VALUE :
      return {
        ...state,
        errorMessage: payload,
      }
    default :
      return state
  }
}

export default setUserDepositValueReducer;