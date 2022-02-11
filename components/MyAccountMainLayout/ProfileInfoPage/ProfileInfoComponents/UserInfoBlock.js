import styles from '../../../../styles/MyAccount/UserInfoPage/UserInfoBlock.module.scss';
import Link from "next/link";

export const UserInfoBlock = ({t, userInfo, currencyJurisdiction}) => {
  let fullName = userInfo.user.user.full_name;
  let nickname = userInfo.user.user.username;
  let gender = userInfo.user.user.gender;
  let country = userInfo.user.user.country_code ? userInfo.user.user.country_code : null;
  let city = userInfo.user.user.city;
  let address = (userInfo.user.user.address_1 ? userInfo.user.user.address_1 : "") + " " + (userInfo.user.user.address_2 ? userInfo.user.user.address_2 : "");
  let postalCode = userInfo.user.user.postal_code;
  let receiveEmails = userInfo.user.user.transactional_email_opt_in === 1 ? 'Yes' : "No";
  let receiveSms = userInfo.user.user.transactional_sms_opt_in === 1 ? 'Yes' : "No";

  
  return (
    <div className={styles.userInfoBlock}>
      <table cellSpacing={0} className={styles.personalInfoTable}>
        <thead>
        <tr>
          <th colSpan={2}>{t("myAccount.profilePage.userInfoBlock.heading")}</th>
        </tr>
        </thead>
        <tbody>
        {
          currencyJurisdiction.success && currencyJurisdiction.results.length
            ?
            <tr>
              <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.fullName")}</td>
              <td className={styles.secondCeil}>{fullName}</td>
            </tr>
            :
            <></>
        }
        <tr>
          <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.nickname")}</td>
          <td className={styles.secondCeil}>{nickname}</td>
        </tr>
        {
          currencyJurisdiction.success && currencyJurisdiction.results.length
            ?
            <>
              <tr>
                <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.gender")}</td>
                <td className={styles.secondCeil}>{gender}</td>
              </tr>
              <tr>
                <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.country")}</td>
                <td className={styles.secondCeil}>{country}</td>
              </tr>
              <tr>
                <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.city")}</td>
                <td className={styles.secondCeil}>{city}</td>
              </tr>
              <tr>
                <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.address")}</td>
                <td className={styles.secondCeil}>{address}</td>
              </tr>
              <tr>
                <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.postalCode")}</td>
                <td className={styles.secondCeil}>{postalCode}</td>
              </tr>
            </>
            :
            <></>
        }
        <tr>
          <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.emailPromos")}</td>
          <td className={styles.secondCeil}>{receiveEmails}</td>
        </tr>
        <tr>
          <td className={styles.firstCeil}>{t("myAccount.profilePage.userInfoBlock.SMSPromos")}</td>
          <td className={styles.secondCeil}>{receiveSms}</td>
        </tr>
        </tbody>
      </table>
      <Link href={'/accounts/profile-info/edit'}><a
        className={styles.editProfileButton}>{t("myAccount.profilePage.userInfoBlock.editProfile")}</a></Link>
    </div>
  )
}