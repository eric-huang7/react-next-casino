import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';


export const CountrySelector = ({t}) => {


  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor="countrySelector">Country</label>
      </div>
      <div className={styles.selectorsContainer}>
        <select id="countrySelector">

        </select>
      </div>
    </div>
  )
}