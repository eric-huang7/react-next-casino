import { createAction } from "redux-actions";
import Connect from "../../helpers/connect";
import {activeBonuses_url} from "../url/url";
import {siteID} from "../../envs/envsForFetching";

export const getActiveBonusesAction = createAction("GET_ACTIVE_BONUSES");
export const getAllBonusesAction = createAction("GET_ALL_BONUSES");
export const annulActiveBonuses = createAction("ANNUL_ACTIVE_BONUSES");

export const getAllBonuses = () => dispatch => {
  const config = {
    params: {
      site_id: siteID,
    }
  }

  Connect.get(activeBonuses_url, config, (status, data) => dispatch(getAllBonusesAction(data)));
}

export const getActiveBonuses = (currencyId) => dispatch => {
  const config = {
    params: {
      site_id: siteID,
      currency_id : currencyId
    }
  }

  return Connect.get(activeBonuses_url, config, (status, data) => dispatch(getActiveBonusesAction(data)));
}
