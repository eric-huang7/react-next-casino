import {GET_TOURNAMENTS} from "../actions/types";


const initialState = {
  tournaments: null,
  loadingTournaments: true
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
    default:
      return state;
  }
}

export default tournamentsReducer;