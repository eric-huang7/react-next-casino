import {GET_WINNERS} from "../actions/types";

const initialState = {
  winners: null,
  loading: true,
}

function winnersReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_WINNERS:
      return {
        ...state,
        winners: {...payload},
        loading: false
      }
    default:
      return state
  }
}

export default winnersReducer;