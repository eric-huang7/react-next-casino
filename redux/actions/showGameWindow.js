import {SHOW_GAME_WINDOW} from "./types";


export const showGameWindow = (isShow) => {


  return {
    type: SHOW_GAME_WINDOW,
    payload: isShow,
  }
}