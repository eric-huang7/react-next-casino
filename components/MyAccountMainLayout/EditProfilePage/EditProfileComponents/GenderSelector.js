import styles from '../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss';


export const GenderSelector = ({t, disableEdit, value, genderSelectorHandler}) => {


  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor="genderSelector">Gender</label>
      </div>
      <div className={styles.selectorsContainer}>
        <select
          id="genderSelector"
          value={value}
          disabled={disableEdit}
          onChange={(e) => genderSelectorHandler(e.target.value)}
        >
          <option value={0}>{null}</option>
          <option value={1}>{'Male'}</option>
          <option value={2}>{'Female'}</option>
        </select>
      </div>
    </div>
  )
}