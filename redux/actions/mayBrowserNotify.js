import { MAY_BROWSER_NOTIFY } from "./types";



export const mayBrowserNotify = (isShow) => {
  return {
    type: MAY_BROWSER_NOTIFY,
    payload: isShow
  };
}