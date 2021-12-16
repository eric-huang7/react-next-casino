// ########## Games url
export const games_url = 'http://t-gpb.slotsidol.com:7000/games';
export const newGames_url = 'http://t-gpb.slotsidol.com:7000/games?ordering=release_date-DESC';
export const jackpotGames_url = 'http://t-gpb.slotsidol.com:7000/games?type=4';
export const tableGames_url = 'http://t-gpb.slotsidol.com:7000/games?type=2';
export const freeGame_url = 'http://t-gpb.slotsidol.com:7000/free_game';
export const payGame_url = 'http://t-gpb.slotsidol.com:7000/start_game';
export const latest_games = (userId) => `http://t-gpb.slotsidol.com:7000/recent_games?user_id=${userId}`;
export const topGames_url = `http://t-gpb.slotsidol.com:7000/games?ordering=times_played-DESC`;

// ########## Winners && Jackpots url

export const winners_url = 'http://t-gpb.slotsidol.com:7000/winners';
export const winners_latest_url = `http://t-gpb.slotsidol.com:7000/winners?begin_date=${Math.ceil((Date.now() - 604800000) / 1000)}&min_win=20`; // 604800000 milliseconds for 7 days

export const jackpots_url = 'http://t-gpb.slotsidol.com:7000/jackpots?amount=10000';


// ########## userData & auth & register url

export const login_url = 'http://t-gpb.slotsidol.com:7000/login';

export const auth_url = 'http://t-gpb.slotsidol.com:7000/auth';

// ########## user info

export const user_url = 'http://t-gpb.slotsidol.com:7000/user';

export const phone_number_url = 'http://t-gpb.slotsidol.com:7000/token'

// ########## register

export const signUp_url = 'http://t-gpb.slotsidol.com:7000/user';

// ########## logout

export const logout_url = 'http://t-gpb.slotsidol.com:7000/logout';

// ######### user information

export const user_balance_url = 'http://t-gpb.slotsidol.com:7000/balance';

// ######## get currencies

export const currency_url = 'http://t-gpb.slotsidol.com:7000/currencies';

// ######## get bonuses
export const activeBonuses_url = 'http://t-gpb.slotsidol.com:7000/bonus_offer?active=1';

// ######## get tournaments

export const get_tournaments_url = 'http://t-gpb.slotsidol.com:7000/tournament';

// ####### POST DEPOSIT PAYMENT
export const post_add_user_currency = 'http://t-gpb.slotsidol.com:7000/deposit/add';

export const post_deposit_payment = 'http://t-gpb.slotsidol.com:7000/deposit';

export const post_credit_card_deposit_payment = 'http://t-gpb.slotsidol.com:7000/deposit/cc';

// ######## PAYMENTS

export const get_user_payments_url = "http://t-gpb.slotsidol.com:7000/payments?ordering=timestamp-desc";

// ######### BETS

export const get_user_bets = 'http://t-gpb.slotsidol.com:7000/bets?quantity=50&ordering=time_created-DESC';

// BONUSES DATA

export const get_bonuses_data_url = 'http://t-gpb.slotsidol.com:7000/bonus_redemption?ordering=time_redeemed-DESC';

export const put_bonus_redemption_url = 'http://t-gpb.slotsidol.com:7000/bonus_redemption';
export const post_cancel_bonus_redemption_url = 'http://t-gpb.slotsidol.com:7000/bonus_cancelation';