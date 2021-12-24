import styles from '../../../../styles/MyAccount/UserInfoPage/TwoFactorAuthPage.module.scss';
import {QrGenerator} from "./QrGenerator";



export const QrcodeContainer = ({t, authData}) => {


  return (
    <div  className={styles.qrCodeContainer}>
      <QrGenerator qrData={authData.qr ? authData.qr : "Try Again!"}/>
      <div className={styles.qrTextContainer}>
        <p className={styles.cantScan}>{t("myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.qrBlock.icantScan")}</p>
        <p  className={styles.copyText}>{t("myAccount.twoFactorAuthPage.twoFaNOTCompleteContainer.qrBlock.copyCodeText")}</p>
        <p className={styles.qrKeyAuth}>{authData.key ? authData.key : authData.extra_error_info}</p>
      </div>
    </div>
  )
}