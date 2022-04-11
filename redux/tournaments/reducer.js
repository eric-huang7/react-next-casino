import {handleActions} from "redux-actions";
import {getTournamentsAction, setActiveTournaments} from "./action";

const initialState = {
  tournaments: null,
  loadingTournaments: true,
  activeTournament: null,
}

const handlers = {
  [getTournamentsAction]: (state, {payload}) => {
    return {
      ...state,
      tournaments: {...payload},
      loadingTournaments: false
    }
  },
  [setActiveTournaments]: (state, {payload}) => {
    return {
      ...state,
      activeTournament: {...payload},
    }
  },
}

export default handleActions(handlers, initialState);
