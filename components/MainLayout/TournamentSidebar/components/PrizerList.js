import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const PrizerList = ({ t, sliderPosition, tournaments }) => {
  const tournament = tournaments?.tournaments?.results[sliderPosition]
  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return (
      <div className={styles.prizerListWrapper} style={{height: 'calc(100% - 270px)'}}>
        <ol className={styles.prizerList}>
          {
            tournaments.tournaments?.results[sliderPosition]?.prizes?.map((el, index) => {
              let nickName = tournament?.players[index]
                ? tournament?.players[index].nickname
                : '-'
              let points = tournament?.players[index]
                ? Number(tournament?.players[index].points).toFixed(2)
                : '-'
              let moneyAward = el.money_award > 0
                ? Number(el.money_award)
                : el.freespins_count
              let currency = el.money_award > 0
                ? tournament?.currency
                : 'fs'
              return (
                <ErrorEmpty key={`${el.id} prizes list`}>
                  <li key={`${el.id} prizes list`} className={styles.prizerItem}>
                    <span className={styles.number}>{index + 1}.</span>
                    <span className={styles.name}>{nickName}</span>
                    <span className={styles.points}>{points ? points : 'points null'}</span>
                    <span className={styles.winAward}>{moneyAward}</span>
                    <span className={styles.currency}>{currency}</span>
                  </li>
                  <hr className={styles.divider}/>
                </ErrorEmpty>
              )
            })
          }
        </ol>
      </div>
    )
  }

}
