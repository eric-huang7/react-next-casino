import {GET_JACKPOTS} from "../actions/types";

const initialState = {
  jackpots: null,
  loading: true,
}

function jackpotsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_JACKPOTS:
      return {
        ...state,
        jackpots: {...payload},
        loading: false
      }
    default:
      return state
  }
}

export default jackpotsReducer;