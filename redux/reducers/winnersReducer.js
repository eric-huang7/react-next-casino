import {GET_LATEST_WINNERS, GET_WINNERS} from "../actions/types";

const initialState = {
  winners: null,
  loading: true,
  latestWinners: null,
  loadingLatestWinners: true
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
    case GET_LATEST_WINNERS:
      return {
        ...state,
        latestWinners: {...payload},
        loadingLatestWinners: false,
      }
    default:
      return state
  }
}

export default winnersReducer;