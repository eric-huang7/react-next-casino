import styles from '../../../../styles/MyAccount/UserInfoPage/UserInfoBlock.module.scss';
import Link from "next/link";

export const UserInfoBlock = ({t, userInfo}) => {
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
          <th colSpan={2}>Personal</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.firstCeil}>Full name</td><td className={styles.secondCeil}>{fullName}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>Nickname</td><td className={styles.secondCeil}>{nickname}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>Gender</td><td className={styles.secondCeil}>{gender}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>Country</td><td className={styles.secondCeil}>{country}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>City</td><td className={styles.secondCeil}>{city}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>Address</td><td className={styles.secondCeil}>{address}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>Postal code</td><td className={styles.secondCeil}>{postalCode}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>Receive Email Promos</td><td className={styles.secondCeil}>{receiveEmails}</td>
          </tr>
          <tr>
            <td className={styles.firstCeil}>Receive SMS Promos</td><td className={styles.secondCeil}>{receiveSms}</td>
          </tr>
        </tbody>
      </table>
      <Link href={'/accounts/edit-profile'}><a className={styles.editProfileButton}>Edit your profile</a></Link>
    </div>
  )
}