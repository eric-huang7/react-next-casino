import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss';


export const PrizerItem = ({t, nickName, points, moneyAward, currency, index}) => {

  return (
    <>
      <li className={styles.prizerItem}>
        <span className={styles.number}>{index + 1}.</span>
        <span className={styles.name}>{nickName}</span>
        <span className={styles.points}>{points ? points : 'points null'}</span>
        <span className={styles.winAward}>{moneyAward}</span>
        <span className={styles.currency}>{currency}</span>
      </li>
      <hr className={styles.divider}/>
    </>

  )
}