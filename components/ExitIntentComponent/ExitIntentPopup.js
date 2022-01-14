import {useEffect, useState} from "react";
import {ExitIntentMainComponent} from "./ExitIntentMainComponent";
import {numberTransformer} from "../../helpers/numberTransformer";
import {useDispatch, useSelector} from "react-redux";
import {showExitIntentPopup} from "../../redux/actions/showPopups";
import {getActiveBonuses} from "../../redux/actions/getBonuses";
import {getTopGames} from "../../redux/actions/games";
import {bonusesFinder} from "../../helpers/bonusesFinder";



export const ExitIntentPopup = ({t, userInfo, isShowExitIntent}) => {
  const dispatch = useDispatch();
  
  // const isShowExitIntent = true;

  const [showPopup, setShowPopup] = useState(false);

  const exit = (e) => {
    dispatch(showExitIntentPopup(false));
    setShowPopup(false);
  };

  const mouseEvent = (e) => {
    if (typeof window !== 'undefined') {
      const shouldShowExitIntent =
        !e.toElement &&
        !e.relatedTarget &&
        e.clientY < 10 &&
        e.clientY > -5 &&
        window.innerWidth > 1065;

      if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        setShowPopup(true);
      }
    }

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', mouseEvent);
      // document.querySelector('.exit-intent-popup').addEventListener('click', exit);
    }, 10000);

    return () => {
      document.removeEventListener('mouseout', mouseEvent);
      clearTimeout(timer);
    }
  }, [])


  useEffect(() => {
    dispatch(getActiveBonuses());
    dispatch(getTopGames());
  }, [showPopup])

  const activeBonuses = useSelector((state) => state.bonuses);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const gamesList = useSelector((store) => store.games);


  if (activeBonuses.activeBonuses?.success && gamesList?.topGames?.success) {
    if (!userInfo.isAuthenticated) {
      let bonusesList = activeBonuses.activeBonuses.offers.slice(0, 3);
      if (bonusesList.length === 0) {
        return (
          <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"games"}/>
        )
      } else {
        return (
          <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"bonus"}/>
        )
      }
    } else if (userInfo.balance && userInfo.balance?.success) {

      let notEmptyBalance = userInfo.balance?.balances.filter((el) => {
        let amount = numberTransformer(el.current_balance);
        if (amount !== '0.00') {
          return true
        } else {
          return false
        }
      });

      if (notEmptyBalance.length !== 0) {

        return (
          <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"games"}/>
        )
      } else {
        let bonusesList = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency).slice(0, 3);
        if (bonusesList.length === 0) {
          return (
            <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"games"}/>
          )
        } else {
          return (
            <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"bonus"}/>
          )
        }
      }
    } else {
      return (
        <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"loading"}/>
      )
    }
  } else if (!activeBonuses.activeBonuses?.success && gamesList?.topGames?.success) {
    return (
      <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"games"}/>
    )
  } else {
    return (
      <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={"loading"}/>
    )
  }


}