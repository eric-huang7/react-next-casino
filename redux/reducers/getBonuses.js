import {ANNUL_ACTIVE_BONUSES, GET_ACTIVE_BONUSES} from "../actions/types";

const initialState = {
  bonuses: null,
  loading: true,
  activeBonuses: null,
  loadingActiveBonuses: true,
}

function getBonuses(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_ACTIVE_BONUSES:
      return {
        ...state,
        activeBonuses: {...payload},
        loadingActiveBonuses: false
      }
    case ANNUL_ACTIVE_BONUSES:
      return {
        ...state,
        activeBonuses: null,
        loadingActiveBonuses: true,
      }
    default:
      return state
  }
}

export default getBonuses;