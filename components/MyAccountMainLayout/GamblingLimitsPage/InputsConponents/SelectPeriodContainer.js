import styles from "../../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss";


export const SelectPeriodContainer = ({t}) => {


  return (
    <div className={styles.selectPeriodBlock}>
      <label htmlFor="selectPeriodSelfExclusion" className={styles.labelSelectPeriod}>Period</label>
      <select
        id="selectPeriodSelfExclusion"
        className={styles.selectPeriod}
      >
        <option value={undefined}>{null}</option>
        <option value={undefined}>{"24 Hours"}</option>
        <option value={undefined}>{"7 Days"}</option>
        <option value={undefined}>{"14 Days"}</option>
        <option value={undefined}>{"1 Month"}</option>
        <option value={undefined}>{"3 Months"}</option>
        <option value={undefined}>{"6 Months"}</option>
        <option value={undefined}>{"9 Months"}</option>
        <option value={undefined}>{"1 Year"}</option>
        <option value={undefined}>{"1 Year"}</option>
        <option value={undefined}>{"Forever"}</option>
      </select>
    </div>
  )
}