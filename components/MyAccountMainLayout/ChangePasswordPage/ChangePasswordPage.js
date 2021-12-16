import styles from '../../../styles/MyAccount/UserInfoPage/ChangePasswordPage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {ChangePasswordContainer} from "./ChangePasswordContainer";


export const ChangePasswordPage = ({t}) => {


  return (
    <div>
      <Heading t={t} heading={"myAccount.pageHeadings.changePassword"}/>
      <ChangePasswordContainer t={t}/>
    </div>
  )
}