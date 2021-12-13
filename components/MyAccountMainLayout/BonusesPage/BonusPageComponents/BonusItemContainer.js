import styles from '../../../../styles/MyAccount/BonusPage/BonusPage.module.scss';

export const BonusItemContainer = ({t}) => {

  return (
    <div className={styles.bonusItemContainer}>
      <div  className={styles.bonusItemHeading}>
        <p className={styles.headingText}>100% first deposit bonus</p>
        <p className={styles.bonusItemStatus}>Active</p>
      </div>
      <ul className={styles.bonusInfoList}>
        <li className={styles.bonusInfoListItem}>
          <p className={styles.amountName}>Amount</p>
          <p className={styles.amountValue}>31.64 USD</p>
        </li>
        <li className={styles.bonusInfoListItem}>
          <p className={styles.amountWagerReq}>Amount wager requirement</p>
          <p className={styles.amountWagerReqValue}>30 USD</p>
        </li>
        <li className={styles.bonusInfoListItem}>
          <p className={styles.wagerPercent}>Wager Percent</p>
          <p className={styles.dateReceived}>31.64 USD</p>
        </li>
        <li className={styles.bonusInfoListItem}>
          <p className={styles.amountName}>Amount</p>
          <p className={styles.amountValue}>31.64 USD</p>
        </li>
        <li className={styles.bonusInfoListItem}>
          <p className={styles.amountName}>Amount</p>
          <p className={styles.amountValue}>31.64 USD</p>
        </li>
      </ul>
    </div>
  )
}