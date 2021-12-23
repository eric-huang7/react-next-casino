import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import {QrGenerator} from "./QrGenerator";



export const QrcodeContainer = ({t, authData}) => {


  return (
    <div  className={styles.qrCodeContainer}>
      <QrGenerator qrData={authData.qr ? authData.qr : "Try Again!"}/>
      <div className={styles.qrTextContainer}>
        <p className={styles.cantScan}>{"I can't scan QR code"}</p>
        <p  className={styles.copyText}>You can also copy and paste this key into the authentication app:</p>
        <p className={styles.qrKeyAuth}>{authData.key ? authData.key : authData.extra_error_info}</p>
      </div>
    </div>
  )
}