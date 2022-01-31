import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const BonusInfoBlock = () => {


  return (
    <ul className={styles.infoBlock}>
      <li className={styles.infoItem}>
        <p>{'Max bonus'}</p>
        <p>{'100% up to $100'}</p>
      </li>
      <li className={styles.infoItem}>
        <p>{'Free spins'}</p>
        <p>{'20 instant + 160 (20 per day, starting in 24 hours)'}</p>
      </li>
      <li className={styles.infoItem}>
        <p>{'Wagering Requirements'}</p>
        <p>{'x40 Bonus'}</p>
      </li>
      <li className={styles.infoItem}>
        <p>{'Max Bet per Game Round'}</p>
        <p>{'5 USD'}</p>
      </li>
    </ul>
  )
}