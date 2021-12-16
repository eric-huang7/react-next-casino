import styles from '../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {ChangePasswordContainer} from "./ChangePasswordContainer";
import {useSelector} from "react-redux";


export const ChangePasswordPage = ({t}) => {
  const userInfo = useSelector((store) => store.authInfo);

  return (
    <div>
      <Heading t={t} heading={"myAccount.pageHeadings.changePassword"}/>
      <ChangePasswordContainer userInfo={userInfo} t={t}/>
    </div>
  )
}