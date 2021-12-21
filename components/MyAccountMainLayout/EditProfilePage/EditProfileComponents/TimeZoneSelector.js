import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';



export const TimeZoneSelector = ({t}) => {



  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor="timeZoneSelector">Time Zone*</label>
      </div>
      <div className={styles.selectorsContainer}>
        <select id="timeZoneSelector">

        </select>
      </div>
    </div>
  )
}