import { SET_INPUT_DEPOSIT_VALUE} from "../actions/types";

const initialState = {
  value: 30.00
};

function setUserDepositValueReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SET_INPUT_DEPOSIT_VALUE :
      return {
        ...state,
        value: payload,
      }
    default :
      return state
  }
}

export default setUserDepositValueReducer;