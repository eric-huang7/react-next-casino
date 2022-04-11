import {jackpots_url, winners_latest_url, winners_url} from "../url/url";
import Connect from "../../helpers/connect";
import {createAction} from "redux-actions";

export const getJackpotsAction = createAction("GET_JACKPOTS");
export const getWinnersAction = createAction("GET_WINNERS");
export const getLatestWinnersAction = createAction("GET_LATEST_WINNERS");

export const getJackpots = () => dispatch =>
  Connect.get(jackpots_url, {}, (status, data) => dispatch(getJackpotsAction(data)));

export const getWinners = () => dispatch =>
  Connect.get(winners_url, {}, (status, data) => dispatch(getWinnersAction(data)));

export const getLatestWinners = () => dispatch =>
  Connect.get(winners_latest_url, {}, (status, data) => dispatch(getLatestWinnersAction(data)));
