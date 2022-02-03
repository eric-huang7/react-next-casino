import {GET_TOURNAMENTS, SET_ACTIVE_TOURNAMENT} from "../actions/types";


const initialState = {
  tournaments: null,
  loadingTournaments: true,
  activeTournament: null,
}

function tournamentsReducer(state = initialState, action) {
  const {type, payload} = action;


  switch (type) {
    case GET_TOURNAMENTS:
      return {
        ...state,
        tournaments: {...payload},
        loadingTournaments: false
      }
    case SET_ACTIVE_TOURNAMENT:
      return {
        ...state,
        activeTournament: {...payload},
      }
    default:
      return state;
  }
}

export default tournamentsReducer;