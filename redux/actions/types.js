// ################# GET GAMES
import {tableGames_url} from "../url/url";

export const GET_GAMES = 'GET_GAMES';
export const GET_TABLE_GAMES = 'GET_TABLE_GAMES';
export const GET_NEW_GAMES = 'GET_NEW_GAMES';
export const GET_JACKPOT_GAMES = 'GET_JACKPOT_GAMES';
export const GET_LATEST_GAMES = 'GET_LATEST_GAMES';
export const GET_TOP_GAMES = 'GET_TOP_GAMES';

export const SET_GAMES = 'SET_GAMES';
export const SET_SEARCH_GAMES = 'SET_SEARCH_GAMES';


export const GET_IMAGES = 'GET_IMAGES';

// ################# DOCUMENTS

export const GET_DOCUMENT = 'GET_DOCUMENT';

// ################# GET WINNERS && JACKPOTS
export const GET_WINNERS = "GET_WINNERS";
export const GET_LATEST_WINNERS = 'GET_LATEST_WINNERS';

export const GET_JACKPOTS = "GET_JACKPOTS";


// ################# SHOW POPUP REGISTER & LOGIN

export const SHOW_REGISTER = 'SHOW_REGISTER';
export const HIDE_REGISTER = 'HIDE_REGISTER';

export const SHOW_LOGIN = 'SHOW_LOGIN';
export const HIDE_LOGIN = 'HIDE_LOGIN';

// ############### LOGIN REQ

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const AUTH_FAIL = 'AUTH_FAIL';

// ############## REGISTER REQ

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';


// ############### AUTH REQ

export const AUTH = 'AUTH';

export const QR_AUTH = 'QR_AUTH';

export const GET_SAVED_KEYS = 'GET_SAVED_KEYS';

export const MAY_TWO_FACTOR_AUTH = 'MAY_TWO_FACTOR_AUTH';

export const CHANGE_PASSWORD_LOGIN = 'CHANGE_PASSWORD_LOGIN';

// ################# SESSIONS

export const GET_ACTIVE_SESSIONS = 'GET_ACTIVE_SESSIONS';
export const GET_CLOSED_SESSIONS = 'GET_CLOSED_SESSIONS';

export const DELETE_SESSION = 'DELETE_SESSION';


// ############### LOGOUT REQ

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

// ############### BALANCE

export const BALANCE = 'BALANCE';
export const PATCH_CHANGE_CURRENCY = 'PATCH_CHANGE_CURRENCY';


// ############### PLAY GAMES

export const PLAY_FREE_GAME = 'PLAY_FREE_GAME';
export const PLAY_GAME = 'PLAY_GAME';

// ############## CURRENCIES

export const GET_CURRENCY = "GET_CURRENCY";

export const GET_POPULAR_CURRENCY = "GET_POPULAR_CURRENCY";
export const GET_CRYPTO_CURRENCY = "GET_CRYPTO_CURRENCY";
export const GET_STABLE_CURRENCY = "GET_STABLE_CURRENCY";
export const GET_FIAT_CURRENCY = "GET_FIAT_CURRENCY";

// ############## SIDE MOBILE MENU

export const SHOW_MOBILE_MENU = 'SHOW_MOBILE_MENU';
export const HIDE_MOBILE_MENU = 'HIDE_MOBILE_MENU';

// ############## SHOW POPUPS
export const SHOW_CURRENCY_SWITCHER = 'SHOW_CURRENCY_SWITCHER';

export const SHOW_PAYMENT_CURRENCY_SWITCHER = 'SHOW_PAYMENT_CURRENCY_SWITCHER';

export const SHOW_DEPOSIT_MODAL = 'SHOW_DEPOSIT_MODAL';

export const SET_DEPOSIT_STEP = 'SET_DEPOSIT_STEP';

export const SHOW_MOBILE_CRYPTO_PAYMENTS = 'SHOW_MOBILE_CRYPTO_PAYMENTS';

// ############## SET USER CURRENCY SWITCHER
export const SET_USER_CURRENCY_SWITCHER = 'SET_USER_CURRENCY_SWITCHER';

export const CURRENCY_SELECTOR_TYPE = 'CURRENCY_SELECTOR_TYPE';

export const ADD_CURRENCY_TO_USER = 'ADD_CURRENCY_TO_USER';

// ############## SET USER PAYMENT METHOD
export const SET_USER_PAYMENT_METHOD = 'SET_USER_PAYMENT_METHOD';

export const SET_ERROR_WRONG_PAYMENT_METHOD = 'SET_ERROR_WRONG_PAYMENT_METHOD';

// ############## SET INPUT DEPOSIT VALUE
export const SET_INPUT_DEPOSIT_VALUE = 'SET_INPUT_DEPOSIT_VALUE';

export const SET_ERROR_WRONG_DEPOSIT_VALUE = 'SET_ERROR_WRONG_DEPOSIT_VALUE';

// ############## BACK BUTTON SHOULD DO
export const BACK_BUTTON_SHOULD_DO = 'BACK_BUTTON_SHOULD_DO';

// ############## GET BONUSES
export const GET_ACTIVE_BONUSES = 'GET_ACTIVE_BONUSES';

export const GET_ALL_BONUSES = 'GET_ALL_BONUSES';

export const ANNUL_ACTIVE_BONUSES = 'ANNUL_ACTIVE_BONUSES';

// ############## SET USER BONUS

export const SET_USER_BONUS = 'SET_USER_BONUS';

export const SET_USER_BONUS_CODE = 'SET_USER_BONUS_CODE';

// ############## SHOW MANAGE SUBSCRIPTIONS
export const SHOW_MANAGE_SUBSCRIPTIONS = 'SHOW_MANAGE_SUBSCRIPTIONS';

// ############## CHANGE USER SUBSCRIPTIONS
export const CHANGE_LOCAL_USER_SUBSCRIPTIONS = 'CHANGE_LOCAL_USER_SUBSCRIPTIONS';

export const CHANGE_USER_SUBSCRIPTIONS = 'CHANGE_USER_SUBSCRIPTIONS';

export const FAIL_CHANGE_USER_SUBSCRIPTIONS = 'FAIL_CHANGE_USER_SUBSCRIPTIONS';

// ############## SHOW NOTIFICATIONS POPUP
export const SHOW_NOTIFICATIONS_POPUP = 'SHOW_NOTIFICATIONS_POPUP';

// ############## ERROR POPUP

export const ACTIVATE_ERROR_POPUP = 'ACTIVATE_ERROR_POPUP';
export const DEACTIVATE_ERROR_POPUP = 'DEACTIVATE_ERROR_POPUP';

// ############## SET NOTIFICATIONS
export const SET_NOTIFICATIONS_1 = 'SET_NOTIFICATIONS_1';
export const SET_NOTIFICATIONS_2 = 'SET_NOTIFICATIONS_2';
export const SET_NOTIFICATIONS_3 = 'SET_NOTIFICATIONS_3';
export const SET_NOTIFICATIONS_4 = 'SET_NOTIFICATIONS_4';

// #############

export const MAY_BROWSER_NOTIFY = 'MAY_BROWSER_NOTIFY';


// ############## SHOW SEARCH MODAL

export const SHOW_SEARCH_MODAL = 'SHOW_SEARCH_MODAL';

// ############## SHOW PLAY SAFE

export const SHOW_PLAY_SAFE = 'SHOW_PLAY_SAFE';

// ############## TOURNAMENTS

export const GET_TOURNAMENTS = 'GET_TOURNAMENTS';

export const SHOW_TOURNAMENTS = 'SHOW_TOURNAMENTS';

export const SHOW_TOURNAMENTS_DETAILS = 'SHOW_TOURNAMENTS_DETAILS';


export const CLOSE_All = 'CLOSE_All';


// ############## PAYMENT POPUPS

export const SHOW_CREDIT_CARD_MODAL = 'SHOW_CREDIT_CARD_MODAL';
export const SHOW_CRYPTO_MODAL = 'SHOW_CRYPTO_MODAL';
export const SHOW_MOBILE_PAYMENTS_STEPPER = 'SHOW_MOBILE_PAYMENTS_STEPPER';

export const POST_CREDIT_CARD_PAYMENT = 'POST_CREDIT_CARD_PAYMENT';
export const ERROR_CREDIT_CARD_PAYMENT = 'ERROR_CREDIT_CARD_PAYMENT';

export const POST_CRYPTO_PAYMENT = 'POST_CRYPTO_PAYMENT';
export const ERROR_CRYPTO_PAYMENT = 'ERROR_CRYPTO_PAYMENT';
export const ANNUL_CRYPTO_PAYMENT = 'ANNUL_CRYPTO_PAYMENT';


// GET_USER_PAYMENTS

export const GET_USER_PAYMENTS = 'GET_USER_PAYMENTS';

// GET_USER_BETS_DATA

export const GET_USER_BETS_DATA = 'GET_USER_BETS_DATA';

// GET_BONUS_HISTORY_DATA

export const GET_BONUS_HISTORY_DATA = 'GET_BONUS_HISTORY_DATA';

export const GET_ACTIVE_PENDING_BONUSES = 'GET_ACTIVE_PENDING_BONUSES';

export const ACTIVATE_BONUS = 'ACTIVATE_BONUS';
export const CANCEL_BONUS = 'CANCEL_BONUS';

// EXIT INTENT

export const SHOW_EXIT_INTENT_POPUP = 'SHOW_EXIT_INTENT_POPUP';

// FORGOT PASSWORD POPUP

export const SHOW_FORGOT_PASSWORD = 'SHOW_FORGOT_PASSWORD';

export const SHOW_CHANGE_PASSWORD_WINDOW = 'SHOW_CHANGE_PASSWORD_WINDOW';

export const SHOW_EMAIL_VALIDATION_SUCCESS = 'SHOW_EMAIL_VALIDATION_SUCCESS';
export const SHOW_EMAIL_VALIDATION_ERROR = 'SHOW_EMAIL_VALIDATION_ERROR';

// SHOW TWO FA WINDOW

export const SHOW_TWO_FA_WINDOW = 'SHOW_TWO_FA_WINDOW';


