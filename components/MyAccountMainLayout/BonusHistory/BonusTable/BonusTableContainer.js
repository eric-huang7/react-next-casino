import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';
import {BonusTableHeading} from "./BonusTableHeading";
import {BonusTableRow} from "./BonusTableRow";


export const BonusTableContainer = ({t}) => {


  return (
    <table className={styles.bonusTableContainer}>
      <thead>
      <BonusTableHeading t={t}/>
      </thead>
      <tbody>
      <BonusTableRow t={t}/>
      </tbody>
    </table>
  )
}