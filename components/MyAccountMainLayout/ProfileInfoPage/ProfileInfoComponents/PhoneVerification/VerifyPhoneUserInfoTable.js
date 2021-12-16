import styles from "../../../../../styles/MyAccount/UserInfoPage/PhoneVerification.module.scss";


export const VerifyPhoneUserInfoTable = ({t, phoneNumber, status}) => {


  return (
    <>
      <h3 className={styles.verifyHeading}>Verified Phone</h3>
      <table className={styles.verifyPhoneTable}>
        <tbody>
        <tr>
          <td>Phone Number</td>
          <td>{phoneNumber}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{status}</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}