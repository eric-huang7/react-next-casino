import {handleActions} from "redux-actions";
import {getJackpots, getLatestWinnersAction, getWinnersAction} from "./action";

const initialState = {
  jackpots: null,
  winners: null,
  loading: true,
  latestWinners: null,
  loadingLatestWinners: true
}

const handlers = {
  [getJackpots]: (state, {payload}) => {
    return {
      ...state,
      jackpots: {...payload},
      loading: false
    }
  },
  [getWinnersAction]: (state, {payload}) => {
    return {
      ...state,
      winners: {...payload},
      loading: false
    }
  },
  [getLatestWinnersAction]: (state, {payload}) => {
    return {
      ...state,
      latestWinners: {...payload},
      loadingLatestWinners: false,
    }
  },
}

export default handleActions(handlers, initialState);
