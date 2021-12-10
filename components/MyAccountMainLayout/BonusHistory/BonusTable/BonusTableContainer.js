import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';
import {BonusTableHeading} from "./BonusTableHeading";
import {BonusTableRow} from "./BonusTableRow";
import {LoadingComponent} from "../../../LoadingComponent/LoadingComponent";


export const BonusTableContainer = ({t, userInfo, currencyData}) => {
  console.log(userInfo.bonusesHistory.bonuses, 'bonuses history>>>>>.')

  if (userInfo.bonusesHistory?.success) {
    return (
      <table className={styles.bonusTableContainer}>
        <thead>
        <BonusTableHeading t={t}/>
        </thead>
        <tbody>
        {userInfo.bonusesHistory.bonuses.map((bonusData) => {
          return (
            <BonusTableRow
              key={`${bonusData.id} bonus table key`}
              t={t}
              bonusData={bonusData}
              currencyData={currencyData}
            />
            )
        })}
        </tbody>
      </table>
    )
  } else {
    return (
      <LoadingComponent />
    )
  }


}