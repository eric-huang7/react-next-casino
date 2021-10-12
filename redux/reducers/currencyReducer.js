import {GET_CURRENCY} from "../actions/types";

const initialState = {
  currency: null,
  loading: true
}

function getCurrency(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_CURRENCY:
      return {
        ...state,
        currency: {...payload},
        loading: false
      }
    default:
      return state
  }
}

export default getCurrency;