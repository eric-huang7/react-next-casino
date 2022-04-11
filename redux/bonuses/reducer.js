import {handleActions} from "redux-actions";
import {annulActiveBonuses, getActiveBonusesAction, getAllBonusesAction} from "./action";

const initialState = {
  bonuses: null,
  loading: true,
  activeBonuses: null,
  loadingActiveBonuses: true,
}
const handlers = {
  [getAllBonusesAction]: (state, {payload}) => {
    return {
      ...state,
      bonuses: {...payload},
      loading: false,
    }
  },
  [getActiveBonusesAction]: (state, {payload}) => {
    return {
      ...state,
      activeBonuses: {...payload},
      loadingActiveBonuses: false
    }
  },
  [annulActiveBonuses]: (state, {payload}) => {
    return {
      ...state,
      activeBonuses: null,
      loadingActiveBonuses: true,
    }
  },
}

export default handleActions(handlers, initialState);
