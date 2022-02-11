import {Heading} from "../ComponentsForPages/Heading";
import {UserInfoContainer} from "./UserInfoContainer";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";


export const ProfileInfoPage = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);
  const currencyJurisdiction = useSelector((store) => store.getCurrency);

if (userInfo.loadingActiveSessions || userInfo.loadingClosedSessions || currencyJurisdiction.loading_currency_jurisdiction) {
  return (
    <div>
      <Heading t={t} heading={"myAccount.pageHeadings.profileInfo"}/>
      <LoadingComponent t={t}/>
    </div>
  )
} else {
  return (
    <div>
      <Heading t={t} heading={"myAccount.pageHeadings.profileInfo"}/>
      <UserInfoContainer userInfo={userInfo} currencyJurisdiction={currencyJurisdiction.currency_jurisdiction} t={t}/>
    </div>
  )
}

}