import styles from "../../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss";


export const SelectPeriodContainer = ({t, selfExclusionExpiry, selfExclusionExpiryHandler}) => {


  const dayPeriod = 86400000;
  const weekPeriod = 604800000;
  const twoWeeksPeriod = 1209600000;
  const oneMonthPeriod = 2678400000;
  const treeMonthsPeriod = 7776000000;
  const sixMonthsPeriod = 15721200000;
  const nineMonthsPeriod = 23670000000;
  const oneYearPeriod = 31536000000;
  const threeYearsPeriod = 94694400000;
  const foreverPeriod = -1;


  return (
    <div className={styles.selectPeriodBlock}>
      <label htmlFor="selectPeriodSelfExclusion" className={styles.labelSelectPeriod}>{t("myAccount.selfExclusionPage.period")}</label>
      <select
        id="selectPeriodSelfExclusion"
        className={styles.selectPeriod}
        value={selfExclusionExpiry}
        onChange={(e) => selfExclusionExpiryHandler(e.target.value)}
      >
        <option value={dayPeriod}>{t("myAccount.selfExclusionPage.24Hours")}</option>
        <option value={weekPeriod}>{t("myAccount.selfExclusionPage.7Days")}</option>
        <option value={twoWeeksPeriod}>{t("myAccount.selfExclusionPage.14Days")}</option>
        <option value={oneMonthPeriod}>{t("myAccount.selfExclusionPage.1Month")}</option>
        <option value={treeMonthsPeriod}>{t("myAccount.selfExclusionPage.3Months")}</option>
        <option value={sixMonthsPeriod}>{t("myAccount.selfExclusionPage.6Months")}</option>
        <option value={nineMonthsPeriod}>{t("myAccount.selfExclusionPage.9Months")}</option>
        <option value={oneYearPeriod}>{t("myAccount.selfExclusionPage.1Year")}</option>
        <option value={threeYearsPeriod}>{t("myAccount.selfExclusionPage.3Years")}</option>
        <option value={foreverPeriod}>{t("myAccount.selfExclusionPage.Forever")}</option>
      </select>
    </div>
  )
}