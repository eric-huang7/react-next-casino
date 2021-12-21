import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';


export const GenderSelector = ({t}) => {


  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor="genderSelector">Gender</label>
      </div>
      <div className={styles.selectorsContainer}>
        <select id="genderSelector">

        </select>
      </div>
    </div>
  )
}