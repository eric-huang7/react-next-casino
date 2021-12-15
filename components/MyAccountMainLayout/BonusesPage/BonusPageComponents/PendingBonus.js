import styles from "../../../../styles/MyAccount/BonusPage/BonusPage.module.scss";


export const PendingBonus = ({t, title, stage, amountName, amount, wagerOrFreeSpins, wagerOrFreeSpinsAmount, dateReceived, expiryDate, activateBonusClickHandler, bonusData}) => {


  return (
    <div className={styles.bonusItemContainer}>
      <div className={styles.bonusItemHeading}>
        <p className={styles.headingText}>{title}</p>
        <p className={`${styles.bonusItemStatus} ${styles.pendingStatus}`}>{t(stage)}</p>
      </div>
      <ul className={styles.bonusInfoList}>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.amountName}>{t(amountName)}</div>
          <div className={styles.amountValue}>{amount}</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.amountWagerReq}>{t(wagerOrFreeSpins)}</div>
          <div className={styles.amountWagerReqValue}>{wagerOrFreeSpinsAmount}</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.wagerPercent}>{" "}</div>
          <div className={styles.wagerPercentValue}>{""}</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.dateReceived}>{t("myAccount.bonusPage.bonusItems.dateReceived")}</div>
          <div className={styles.dateReceivedValue}>{dateReceived}</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.expiryDate}>{t("myAccount.bonusPage.bonusItems.activateUntil")}</div>
          <div className={styles.expiryDate}>{expiryDate}</div>
        </li>
      </ul>
      <button onClick={() => activateBonusClickHandler(bonusData)} className={styles.activateBonus}>{t("myAccount.bonusPage.bonusItems.activateBonus")}</button>
    </div>
  )
}