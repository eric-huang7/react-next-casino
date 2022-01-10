import styles from '../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss';
import {useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {BonusItemContainer} from "./BonusItemContainer";


export const BonusesContainer = ({t}) => {
  const activeBonuses = useSelector((state) => state.bonuses);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);

  console.log(activeBonuses, '<<<<< bonuses exit');


  if (activeBonuses.activeBonuses?.success) {
    let bonusesList = activeBonuses.activeBonuses.offers.slice(0, 3);
    console.log(bonusesList, 'arr');
    return (
      <div className={styles.bonusMainContainer}>
        {
          bonusesList.map((bonus) => {

            return (
              <BonusItemContainer key={`${bonus.id} bonus item key`} bonusData={bonus} />
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className={styles.bonusMainContainer}>
        <LoadingComponent t={t} />
      </div>
    )
  }

}