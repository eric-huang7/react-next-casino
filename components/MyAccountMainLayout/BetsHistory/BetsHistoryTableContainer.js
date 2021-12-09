import styles from '../../../styles/MyAccount/BetsHistory/BetsHistory.module.scss';
import {BetsHistoryHeading} from "./BetsHistoryTable/BetsHistoryHeading";
import {BetsHistoryRow} from "./BetsHistoryTable/BetsHistoryRow";


export const BetsHistoryTableContainer = ({t, betsData}) => {


  return (
    <div className={styles.tableContainerWrapper}>
      <table cellSpacing={4} className={styles.betsTableContainer}>
        <thead>
         <BetsHistoryHeading t={t}/>
        </thead>
        <tbody>
        {
          betsData.bets.map((betData) => {
            return (
              <BetsHistoryRow key={`bet table ${betData.id}`} betData={betData} t={t}/>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}