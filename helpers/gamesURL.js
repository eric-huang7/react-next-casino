import {serverUrl} from "../envs/url";

export const games_url = () => `${serverUrl}games`;
export const searchGames_url = (search) => `${serverUrl}games?search_term=${search}`;
export const search_newGames_url = (search) => `${serverUrl}games?ordering=release_date-DESC&search_term=${search}`;
export const search_topGames_url = (search) => `${serverUrl}games?ordering=times_played-DESC&search_term=${search}`;
export const search_jackpotGames_url = (search) => `${serverUrl}games?type=4&search_term=${search}`;
export const search_tableGames_url = (search) => `${serverUrl}games?type=2&search_term=${search}`;
export const search_chosenProviderGames_url = (producerID, search) => `${serverUrl}games?producers=${producerID}&search_term=${search}`;


export const game_category_ids = (category) => `${serverUrl}games?type=${category}`;
export const game_provider_ids = (producerID) => `${serverUrl}games?producers=${producerID}`;
export const game_ids = (gamesId) => `${serverUrl}games?ids=${gamesId}`;
export const game_provider_category_ids = (producerID, category) => `${serverUrl}games?producers=${producerID}&type=${category}`;

export const game_category_ids_search = (category, search) => `${serverUrl}games?type=${category}&search_term=${search}`;
export const game_provider_ids_search = (producerID, search) => `${serverUrl}games?producers=${producerID}&search_term=${search}`;
export const game_ids_search = (gamesId, search) => `${serverUrl}games?ids=${gamesId}&search_term=${search}`;
export const game_provider_category_ids_search = (producerID, category, search) => `${serverUrl}games?producers=${producerID}&type=${category}&search_term=${search}`;


export const newGames_url = (quantity = 100, startIndex = 0) => `${serverUrl}games?ordering=release_date-DESC&start_index=${startIndex}&quantity=${quantity}`;
export const topGames_url = (quantity = 100, startIndex = 0) => `${serverUrl}games?ordering=times_played-DESC&start_index=${startIndex}&quantity=${quantity}`;
export const jackpotGames_url = (quantity = 100, startIndex = 0) => `${serverUrl}games?type=4&start_index=${startIndex}&quantity=${quantity}`;
export const tableGames_url = (quantity = 100, startIndex = 0) => `${serverUrl}games?type=2&start_index=${startIndex}&quantity=${quantity}`;
export const allProvidersURL = (quantity = 100, startIndex = 0) => `${serverUrl}games?start_index=${startIndex}&quantity=${quantity}`;
export const chosenProviderURL = (producerID, quantity = 100, startIndex = 0) => `${serverUrl}games?producers=${producerID}&start_index=${startIndex}&quantity=${quantity}`;


export const latest_games = (userId) => `${serverUrl}recent_games?user_id=${userId}`