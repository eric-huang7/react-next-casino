
export const games_url = () => `http://t-gpb.slotsidol.com:7000/games`;
export const searchGames_url = (search) => `http://t-gpb.slotsidol.com:7000/games?search_term=${search}`;
export const search_newGames_url = (search) => `http://t-gpb.slotsidol.com:7000/games?ordering=release_date-DESC&search_term=${search}`;
export const search_topGames_url = (search) => `http://t-gpb.slotsidol.com:7000/games?ordering=times_played-DESC&search_term=${search}`;
export const search_jackpotGames_url = (search) => `http://t-gpb.slotsidol.com:7000/games?type=4&search_term=${search}`;
export const search_tableGames_url = (search) => `http://t-gpb.slotsidol.com:7000/games?type=2&search_term=${search}`;
export const search_chosenProviderGames_url = (producerID, search) => `http://t-gpb.slotsidol.com:7000/games?producers=${producerID}&search_term=${search}`;


export const game_category_ids = (category) => `http://t-gpb.slotsidol.com:7000/games?type=${category}`;
export const game_provider_ids = (producerID) => `http://t-gpb.slotsidol.com:7000/games?producers=${producerID}`;
export const game_ids = (gamesId) => `http://t-gpb.slotsidol.com:7000/games?ids=${gamesId}`;
export const game_provider_category_ids = (producerID, category) => `http://t-gpb.slotsidol.com:7000/games?producers=${producerID}&type=${category}`;

export const game_category_ids_search = (category, search) => `http://t-gpb.slotsidol.com:7000/games?type=${category}&search_term=${search}`;
export const game_provider_ids_search = (producerID, search) => `http://t-gpb.slotsidol.com:7000/games?producers=${producerID}&search_term=${search}`;
export const game_ids_search = (gamesId, search) => `http://t-gpb.slotsidol.com:7000/games?ids=${gamesId}&search_term=${search}`;
export const game_provider_category_ids_search = (producerID, category, search) => `http://t-gpb.slotsidol.com:7000/games?producers=${producerID}&type=${category}&search_term=${search}`;


export const newGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?ordering=release_date-DESC&start_index=${startIndex}&quantity=${quantity}`;
export const topGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?ordering=times_played-DESC&start_index=${startIndex}&quantity=${quantity}`;
export const jackpotGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?type=4&start_index=${startIndex}&quantity=${quantity}`;
export const tableGames_url = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?type=2&start_index=${startIndex}&quantity=${quantity}`;
export const allProvidersURL = (quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?start_index=${startIndex}&quantity=${quantity}`;
export const chosenProviderURL = (producerID, quantity = 100, startIndex = 0) => `http://t-gpb.slotsidol.com:7000/games?producers=${producerID}&start_index=${startIndex}&quantity=${quantity}`;


export const latest_games = (userId) => `http://t-gpb.slotsidol.com:7000/recent_games?user_id=${userId}`