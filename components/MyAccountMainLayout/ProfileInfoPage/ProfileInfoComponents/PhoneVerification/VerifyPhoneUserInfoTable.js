import styles from "../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss";


export const VerifyPhoneUserInfoTable = ({t, phoneNumber, status}) => {


  return (
    <>
      <h3 className={styles.verifyHeading}>{t("myAccount.profilePage.phoneVerification.inputsLabels.verifiedPhone")}</h3>
      <table className={styles.verifyPhoneTable}>
        <tbody>
        <tr>
          <td>{t("myAccount.profilePage.phoneVerification.inputsLabels.phoneNumber")}</td>
          <td>{phoneNumber}</td>
        </tr>
        <tr>
          <td>{t("myAccount.profilePage.phoneVerification.inputsLabels.status")}</td>
          <td>{status}</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}