import {FULL_SCREEN_GAME_WINDOW, MINIMIZE_GAME_WINDOW, SHOW_GAME_WINDOW} from "./types";


export const showGameWindow = (isShow) => {
  return {
    type: SHOW_GAME_WINDOW,
    payload: isShow,
  }
}

export const minimizeGameWindow = (isMinimize) => {
  return {
    type: MINIMIZE_GAME_WINDOW,
    payload: isMinimize,
  }
}
export const fullScreenGameWindow = (isMinimize) => {
  return {
    type: FULL_SCREEN_GAME_WINDOW,
    payload: isMinimize,
  }
}