import { handleActions} from "redux-actions";
import {deleteGameLink, playFreeGame, playGame} from "./action";

const initialState = {
  loading: true,
  freeGame: null,
  startGame: null,
  gameName: '...'
}

const handlers = {
  [playFreeGame]: (state, {payload}) => {
    return {
      ...state,
      freeGame: {...payload.data},
      loading: false,
      gameName: payload.gameName
    }
  },
  [playGame]: (state, {payload}) => {
    return {
      ...state,
      startGame: {...payload.data},
      loading: false,
      gameName: payload.gameName,
      freeGame: null
    }
  },
  [deleteGameLink]: (state, {payload}) => {
    return {
      ...state,
      freeGame: null,
      startGame: null,
      loading: true,
      gameName: '...'
    }
  },
}

export default handleActions(handlers, initialState);
