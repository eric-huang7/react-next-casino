import styles from "../../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss";


export const YearSelector = ({t, year, yearSelectorHandler, disableEdit}) => {
  let yearNow = new Date().getFullYear();
  let firstYear = yearNow - 15;
  let yearsArr = Array.from({length: 100}, (el, ind) => firstYear - ind);


  return (
    <div className={styles.yearSelect}>
      <select
      value={year}
      onChange={(e) => yearSelectorHandler(e.target.value)}
      disabled={disableEdit}
      >
        <option value={undefined}>{null}</option>
        {
          yearsArr.map((el) => <option key={el} value={el}>{el}</option>)
        }
      </select>
    </div>
  )
}