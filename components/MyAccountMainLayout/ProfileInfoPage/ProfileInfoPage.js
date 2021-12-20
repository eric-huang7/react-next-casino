import {Heading} from "../ComponentsForPages/Heading";
import {UserInfoContainer} from "./UserInfoContainer";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";


export const ProfileInfoPage = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);

if (userInfo.loadingActiveSessions || userInfo.loadingClosedSessions) {
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
      <UserInfoContainer userInfo={userInfo} t={t}/>
    </div>
  )
}

}