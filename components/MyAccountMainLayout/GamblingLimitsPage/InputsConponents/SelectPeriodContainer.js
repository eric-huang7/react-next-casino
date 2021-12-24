import styles from "../../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss";


export const SelectPeriodContainer = ({t, selfExclusionExpiry, selfExclusionExpiryHandler}) => {


  return (
    <div className={styles.selectPeriodBlock}>
      <label htmlFor="selectPeriodSelfExclusion" className={styles.labelSelectPeriod}>Period</label>
      <select
        id="selectPeriodSelfExclusion"
        className={styles.selectPeriod}
        value={selfExclusionExpiry}
        onChange={(e) => selfExclusionExpiryHandler(e.target.value)}
      >
        <option value={undefined}>{null}</option>
        <option value={86400000}>{"24 Hours"}</option>
        <option value={604800000}>{"7 Days"}</option>
        <option value={1209600000}>{"14 Days"}</option>
        <option value={2678400000}>{"1 Month"}</option>
        <option value={7776000000}>{"3 Months"}</option>
        <option value={15721200000}>{"6 Months"}</option>
        <option value={23670000000}>{"9 Months"}</option>
        <option value={31536000000}>{"1 Year"}</option>
        <option value={94694400000}>{"3 Years"}</option>
        <option value={-1}>{"Forever"}</option>
      </select>
    </div>
  )
}