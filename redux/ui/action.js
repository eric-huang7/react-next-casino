import {createAction} from "redux-actions";

export const showLogin = createAction("SHOW_LOGIN");
export const hideLogin = createAction("HIDE_LOGIN");
export const showRegister = createAction("SHOW_REGISTER");
export const hideRegister = createAction("HIDE_REGISTER");
export const showMobileMenu = createAction("SHOW_MOBILE_MENU");
export const showGameWindow = createAction("SHOW_GAME_WINDOW");
export const minimizeGameWindow = createAction("MINIMIZE_GAME_WINDOW");
export const fullScreenGameWindow = createAction("FULL_SCREEN_GAME_WINDOW");
export const mayBrowserNotify = createAction("MAY_BROWSER_NOTIFY");
