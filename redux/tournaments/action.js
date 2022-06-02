import { createAction } from "redux-actions";
import Connect from "../../helpers/connect";
import {get_tournaments_url, tournament_award_url} from "../url/url";

export const getTournamentsAction = createAction("GET_TOURNAMENTS");
export const setActiveTournaments = createAction("SET_ACTIVE_TOURNAMENT");

export const getTournaments = () => dispatch =>
  Connect.get(get_tournaments_url, {}, (status, data) => dispatch(getTournamentsAction(data)));

export const postTournamentAward = (data) => dispatch =>
  Connect.post(tournament_award_url, JSON.stringify(data), {}, (status, data) => console.log(tournament_award_url, data));
