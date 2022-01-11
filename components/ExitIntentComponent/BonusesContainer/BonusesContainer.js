import styles from '../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {BonusItemContainer} from "./BonusItemContainer";
import {useEffect} from "react";
import {getActiveBonuses} from "../../../redux/actions/getBonuses";
import {bonusesFinder} from "../../../helpers/bonusesFinder";



export const BonusesContainer = ({t, exit}) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getActiveBonuses());
  // }, [])


  const activeBonuses = useSelector((state) => state.bonuses);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userData = useSelector((store) => store.authInfo);



  if (activeBonuses.activeBonuses?.success) {
    let bonusesList = activeBonuses.activeBonuses.offers.slice(0, 3);

    if (userData.isAuthenticated) {
      bonusesList = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency).slice(0, 3);
    } else {
      bonusesList = activeBonuses.activeBonuses.offers.slice(0, 3);
    }

    console.log(bonusesList, 'arr');
    return (
      <div className={styles.bonusMainContainer}>
        {
          bonusesList.map((bonus) => {

            return (
              <BonusItemContainer
                key={`${bonus.id} bonus item key`}
                t={t}
                userData={userData}
                bonusData={bonus}
                exit={exit}
              />
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