// ########## Games url
export const games_url = 'http://t-gpb.slotsidol.com:7001/games';
export const newGames_url = 'http://t-gpb.slotsidol.com:7001/games?ordering=release_date-DESC';
export const jackpotGames_url = 'http://t-gpb.slotsidol.com:7001/games?type=4';
export const tableGames_url = 'http://t-gpb.slotsidol.com:7001/games?type=2';
export const freeGame_url = 'http://t-gpb.slotsidol.com:7001/free_game';
export const payGame_url = 'http://t-gpb.slotsidol.com:7001/start_game';


// ########## Winners && Jackpots url

export const winners_url = 'http://t-gpb.slotsidol.com:7001/winners';
export const winners_latest_url = `http://t-gpb.slotsidol.com:7001/winners?begin_date=${Math.ceil((Date.now() - 604800000) / 1000)}&min_win=20`; // 604800000 milliseconds for 7 days

export const jackpots_url = 'http://t-gpb.slotsidol.com:7001/jackpots?amount=10000';


// ########## login & auth & register url

export const login_url = 'http://t-gpb.slotsidol.com:7001/login';

export const auth_url = 'http://t-gpb.slotsidol.com:7001/auth';

// ########## register

export const signUp_url = 'http://t-gpb.slotsidol.com:7001/user';

// ######### user information

export const user_balance_url = 'http://t-gpb.slotsidol.com:7001/balance';

// ######## get currencies

export const currency_url = 'http://t-gpb.slotsidol.com:7001/currencies';