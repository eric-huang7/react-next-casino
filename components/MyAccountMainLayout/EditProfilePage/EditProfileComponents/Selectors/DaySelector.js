import styles from "../../../../../styles/MyAccount/UserInfoPage/EditProfilePage.module.scss";


export const DaySelector = ({t, daySelectorHandler, day, disableEdit}) => {
  let daysArr = Array.from({length: 31}, (el, ind) => ind + 1);


  return (
    <div className={styles.daySelect}>
      <select
        id={"daySelector"}
        value={day}
        onChange={(e) => daySelectorHandler(e)}
        disabled={disableEdit}
      >
        <option value={undefined}>{null}</option>
        {
          daysArr.map((el) => <option key={el} value={el}>{el}</option>)
        }
      </select>
    </div>
  )
}