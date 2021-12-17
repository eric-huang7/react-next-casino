import styles from '../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import {TextBlock} from "./GoogleAuthComponents/TextBlock";
import {QrcodeContainer} from "./GoogleAuthComponents/QrcodeContainer";
import {AuthCodeInputBlock} from "./GoogleAuthComponents/AuthCodeInputBlock";
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";


export const GoogleAuthContainer = ({t, authData}) => {



  if (authData.qrAuthLoading) {
    return (
      <LoadingComponent t={t}/>
    )
  } else {
    return (
      <div className={styles.googleAuthContainer}>
        <TextBlock t={t} />
        <QrcodeContainer  authData={authData.qrAuth} t={t} />
        <AuthCodeInputBlock  t={t}/>
        <p className={styles.lastText}>Use Google Authenticator on your mobile device. Scan the QR code to start generating two-factor auth codes.</p>
      </div>
    )
  }

}