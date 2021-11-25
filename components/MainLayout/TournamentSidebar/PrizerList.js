import styles from '../../../styles/TournamentSidebar/TournamentSidebar.module.scss';
import {PrizerItem} from "./PrizerItem";

export const PrizerList = ({t, sliderPosition, tournaments}) => {


  console.log(tournaments.tournaments)
  if (tournaments.loadingTournaments) {
    return <></>
  } else {
    return (
      <div className={styles.prizerListWrapper}>
        <ol className={styles.prizerList}>
          {
            tournaments.tournaments.results[sliderPosition].prizes.map((el, index) => {
              let nickName = tournaments.tournaments.results[sliderPosition].players[index] ? tournaments.tournaments.results[sliderPosition].players[index].nickname : 'empty';
              let points = tournaments.tournaments.results[sliderPosition].players[index] ? tournaments.tournaments.results[sliderPosition].players[index].points : 'empty';
              let moneyAward = el.freespins_count === 0 ? Number(el.money_award) : el.freespins_count;
              let currency = el.freespins_count === 0 ? tournaments.tournaments.results[sliderPosition].currency : "fs"
              return (
                <PrizerItem t={t} currency={currency} moneyAward={moneyAward} nickName={nickName} points={points}/>
              )
            })
          }
        </ol>
      </div>
    )
  }

}