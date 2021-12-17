import styles from '../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import {Heading} from "../ComponentsForPages/Heading";
import {GoogleAuthContainer} from "./GoogleAuthContainer";
import {useSelector} from "react-redux";


export const TwoFactorAuthPage = ({t}) => {
  const authData = useSelector((store) => store.authInfo)


  console.log(authData);
  if (authData.user.user.is_2fa_enabled) {
    return (
      <div className={styles.twoFactorMainWrapper}>
        <Heading t={t} heading={"myAccount.pageHeadings.googleAuth"}/>
        {authData.user.user.is_2fa_enabled}
      </div>
    )
  } else {
    return (
      <div className={styles.twoFactorMainWrapper}>
        <Heading t={t} heading={"myAccount.pageHeadings.googleAuth"}/>
        <GoogleAuthContainer authData={authData} t={t}/>
      </div>
    )
  }


}