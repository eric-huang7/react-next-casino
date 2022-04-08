import {freeGame_url, payGame_url} from "../url/url";
import {createAction} from "redux-actions";
import Connect from "../../helpers/connect";

export const playGame = createAction("PLAY_GAME");
export const playFreeGame = createAction("PLAY_FREE_GAME");
export const deleteGameLink = createAction("DELETE_GAME_LINK");

export const freeGame = (gameData) => dispatch =>
  Connect.post(freeGame_url, JSON.stringify(gameData.data),{}, (status, data) =>
    dispatch(playFreeGame({
      data: {...data},
      gameName: gameData.gameName
    }))
  );

export const playPayGame = (gameData) => dispatch =>
  Connect.post(payGame_url, JSON.stringify(gameData.data),{}, (status, data) =>
    dispatch(playGame({
      data: {...data},
      gameName: gameData.gameName
    }))
  ).catch(e => dispatch(playGame({
    data: {},
    gameName: gameData.gameName
  })));
