// ########## Games url
import {serverUrl} from "../../envs/url";

export const games_url = serverUrl + 'games';
export const newGames_url = serverUrl + 'games?ordering=release_date-DESC';
export const jackpotGames_url = serverUrl + 'games?type=4';
export const tableGames_url = serverUrl + 'games?type=2';
export const freeGame_url = serverUrl + 'free_game';
export const payGame_url = serverUrl + 'start_game';
export const latest_games = (userId) => `http://localhost:3001/recent_games?user_id=${userId}`;
export const topGames_url = `http://localhost:3001/games?ordering=times_played-DESC`;

// ########## Winners && Jackpots url

export const winners_url = serverUrl + 'winners';
export const winners_latest_url = `http://localhost:3001/winners?begin_date=${Math.ceil((Date.now() - 604800000) / 1000)}&min_win=20`; // 604800000 milliseconds for 7 days

export const jackpots_url = serverUrl + 'jackpots?amount=10000';


// ########## document url

export const document_url = serverUrl + 'document';

// ########## userData & auth & register url

export const login_url = serverUrl + 'login';

export const auth_url = serverUrl + 'auth';

export const qr_auth_url = serverUrl + 'authenticator';

// ########## sessions
// ?isCurrent=true&ordering=id-DESC
export const user_sessions_url = serverUrl + 'sessions'
export const delete_user_session_url = (id) => `http://localhost:3001/sessions/${id}`

// ########## user info

export const user_url = serverUrl + 'user';

export const phone_number_url = serverUrl + 'token'

// ########## register

export const signUp_url = serverUrl + 'user';

// ########## logout

export const logout_url = serverUrl + 'logout';

// ######### user information

export const user_balance_url = serverUrl + 'balance';

// ######## get currencies

export const currency_url = serverUrl + 'currencies';

export const popular_currency_url = serverUrl + 'currencies?types=4&isDepositEnabled=1&ordering=rank-ASC';
export const crypto_currency_url = serverUrl + 'currencies?types=1&isDepositEnabled=1&ordering=rank-ASC';
export const stable_currency_url = serverUrl + 'currencies?types=2&isDepositEnabled=1&ordering=rank-ASC';
export const fiat_currency_url = serverUrl + 'currencies?types=3&isDepositEnabled=1&ordering=rank-ASC';




// ######## get tournaments

export const get_tournaments_url = serverUrl + 'tournament';

// ####### POST DEPOSIT PAYMENT
export const post_add_user_currency = serverUrl + 'deposit/add';

export const post_deposit_payment = serverUrl + 'deposit';

export const post_credit_card_deposit_payment = serverUrl + 'deposit/cc';

export const payments_methods_url = serverUrl + 'payment_methods';

// ######## PAYMENTS

export const get_user_payments_url = "http://localhost:3001/payments?ordering=timestamp-desc";

export const post_withdraw_url = "http://localhost:3001/withdraw";

// ######### BETS

export const get_user_bets = serverUrl + 'bets?quantity=50&ordering=time_created-DESC';

// BONUSES DATA

export const get_bonuses_data_url = serverUrl + 'bonus_redemption?ordering=time_redeemed-DESC';

export const put_bonus_redemption_url = serverUrl + 'bonus_redemption';
export const post_cancel_bonus_redemption_url = serverUrl + 'bonus_cancelation';

export const activeBonuses_url = serverUrl + 'bonus_offer?active=1';