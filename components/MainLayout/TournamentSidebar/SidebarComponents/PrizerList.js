import styles from '../../../../styles/TournamentSidebar/TournamentSidebar.module.scss'
import { PrizerItem } from './PrizerItem'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const PrizerList = ({ t, sliderPosition, tournaments }) => {
  const tournament = tournaments?.tournaments?.results[sliderPosition]
  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return (
      <div className={styles.prizerListWrapper}>
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
                  <PrizerItem
                    key={`${el.id} prizes list`}
                    t={t}
                    currency={currency}
                    moneyAward={moneyAward}
                    nickName={nickName}
                    points={points}
                    index={index}
                  />
                </ErrorEmpty>
              )
            })
          }
        </ol>
      </div>
    )
  }

}
