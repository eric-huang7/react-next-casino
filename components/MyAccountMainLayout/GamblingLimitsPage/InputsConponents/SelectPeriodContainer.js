import styles from "../../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss";


export const SelectPeriodContainer = ({t, selfExclusionExpiry, selfExclusionExpiryHandler}) => {


  return (
    <div className={styles.selectPeriodBlock}>
      <label htmlFor="selectPeriodSelfExclusion" className={styles.labelSelectPeriod}>{t("myAccount.selfExclusionPage.period")}</label>
      <select
        id="selectPeriodSelfExclusion"
        className={styles.selectPeriod}
        value={selfExclusionExpiry}
        onChange={(e) => selfExclusionExpiryHandler(e.target.value)}
      >
        <option value={undefined}>{null}</option>
        <option value={86400000}>{t("myAccount.selfExclusionPage.24Hours")}</option>
        <option value={604800000}>{t("myAccount.selfExclusionPage.7Days")}</option>
        <option value={1209600000}>{t("myAccount.selfExclusionPage.14Days")}</option>
        <option value={2678400000}>{t("myAccount.selfExclusionPage.1Month")}</option>
        <option value={7776000000}>{t("myAccount.selfExclusionPage.3Months")}</option>
        <option value={15721200000}>{t("myAccount.selfExclusionPage.6Months")}</option>
        <option value={23670000000}>{t("myAccount.selfExclusionPage.9Months")}</option>
        <option value={31536000000}>{t("myAccount.selfExclusionPage.1Year")}</option>
        <option value={94694400000}>{t("myAccount.selfExclusionPage.3Years")}</option>
        <option value={-1}>{t("myAccount.selfExclusionPage.Forever")}</option>
      </select>
    </div>
  )
}