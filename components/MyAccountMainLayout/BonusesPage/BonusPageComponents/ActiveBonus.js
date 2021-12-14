import styles from "../../../../styles/MyAccount/BonusPage/BonusPage.module.scss";


export const ActiveBonus = ({t, title, stage, amountName, amount, wagerOrFreeSpins, wagerOrFreeSpinsAmount, wagerPercent, dateReceived, expiryDate, cancelBonusClickHandler, bonusData}) => {

  return (
    <div className={styles.bonusItemContainer}>
      <div className={styles.bonusItemHeading}>
        <p className={styles.headingText}>{title}</p>
        <p className={`${styles.bonusItemStatus}`}>{t(stage)}</p>
      </div>
      <ul className={styles.bonusInfoList}>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.amountName}>{amountName}</div>
          <div className={styles.amountValue}>{amount}</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.amountWagerReq}>{wagerOrFreeSpins}</div>
          <div className={styles.amountWagerReqValue}>{wagerOrFreeSpinsAmount}</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.wagerPercent}>Wager Percent</div>
          <div className={styles.wagerPercentValue}>{wagerPercent}%</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.dateReceived}>Date received</div>
          <div className={styles.dateReceivedValue}>{dateReceived}</div>
        </li>
        <li className={styles.bonusInfoListItem}>
          <div className={styles.expiryDate}>Expiry date</div>
          <div className={styles.expiryDate}>{expiryDate}</div>
        </li>
      </ul>
      <button onClick={() => cancelBonusClickHandler(bonusData)} className={styles.cancelBonus}>Cancel Bonus</button>
    </div>
  )
}