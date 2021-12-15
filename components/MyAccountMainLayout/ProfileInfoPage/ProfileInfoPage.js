import {Heading} from "../ComponentsForPages/Heading";
import {UserInfoContainer} from "./UserInfoContainer";
import {useSelector} from "react-redux";


export const ProfileInfoPage = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);


  return (
    <div>
      <Heading t={t} heading={"myAccount.pageHeadings.profileInfo"}/>
      <UserInfoContainer userInfo={userInfo} t={t}/>
    </div>
  )
}