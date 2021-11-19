
export const games_url = () => `http://t-gpb.slotsidol.com:7000/games`;
export const newGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?ordering=release_date-DESC&start_index=${startIndex}&quantity=${quantity}`;
export const topGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?ordering=times_played-DESC&start_index=${startIndex}&quantity=${quantity}`;
export const jackpotGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?type=4&start_index=${startIndex}&quantity=${quantity}`;
export const tableGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?type=2&start_index=${startIndex}&quantity=${quantity}`;
export const allProvidersURL = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?start_index=${startIndex}&quantity=${quantity}`;
export const chosenProviderURL = (produserID, quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?producers=${produserID}&start_index=${startIndex}&quantity=${quantity}`;


export const latest_games = (userId) => `http://t-gpb.slotsidol.com:7000/recent_games?user_id=${userId}`