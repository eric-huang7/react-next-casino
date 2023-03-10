import {useEffect, useState} from "react";
import {ExitIntentMainComponent} from "./ExitIntentMainComponent";
import {numberTransformer} from "../../helpers/numberTransformer";
import {useDispatch, useSelector} from "react-redux";
import {showExitIntentPopup} from "../../redux/popups/action";
import {getActiveBonuses} from "../../redux/bonuses/action";
import {getTopGames} from "../../redux/games/action";
import {bonusesFinder} from "../../helpers/bonusesFinder";

export const ExitIntentPopup = ({t, userInfo, isShowExitIntent}) => {
  const dispatch = useDispatch();

  const activeBonuses = useSelector((state) => state.bonuses);
  const userCurrency = useSelector((state) => state.userFinance);
  const gamesList = useSelector((store) => store.games);
  const isShowPlayWindow = useSelector((store) => store.ui?.isShowPlayWindow);
  const isShowDepositModal = useSelector((state) => state.popups?.isShowDepositModal);

  const [showPopup, setShowPopup] = useState(false);

  const exit = (e) => {
    dispatch(showExitIntentPopup(false));
    setShowPopup(false);

    if (typeof window !== "undefined") {
      const date = new Date().getTime() + 259200000; // milliseconds per 3 days 259200000
      localStorage.setItem("exitTime", `${date}`);
    }
  };

  const mouseEvent = (e) => {
    if (typeof window !== 'undefined') {
      let savedTime = localStorage.getItem("exitTime");
      let nowTime = new Date().getTime();

      let isShowExitByTime = JSON.parse(savedTime) ? JSON.parse(savedTime) <= nowTime : true;

      const shouldShowExitIntent =
        !e.toElement &&
        !e.relatedTarget &&
        e.clientY < 10 &&
        e.clientY > -5 &&
        window.innerWidth > 1065 &&
        isShowExitByTime;

      if (shouldShowExitIntent) {
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
    if (showPopup) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [showPopup]);

  useEffect(() => {
    if ((isShowPlayWindow || isShowDepositModal) && showPopup) {
      setShowPopup(false);
    }
  }, [showPopup, isShowPlayWindow, isShowDepositModal]);

  useEffect(() => {
    if (showPopup) {
      dispatch(getActiveBonuses(userCurrency?.userCurrencyData?.id));
      dispatch(getTopGames());
    }
  }, [userCurrency?.userCurrencyData?.id])



  if (isShowPlayWindow || isShowDepositModal) {
    return null
  }

  let type;

  if (activeBonuses.activeBonuses?.success) {
    if (!userInfo.isAuthenticated) {
      let bonusesList = activeBonuses.activeBonuses.offers.slice(0, 3);
      if (bonusesList.length === 0) {
        type = "games"
      } else {
        type = "bonus"
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
        type = "games"
      } else {
        let bonusesList = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency).slice(0, 3);
        if (bonusesList.length === 0) {
          type = "games"
        } else {
          type = "bonus"
        }
      }
    } else {
      type = "loading"
    }
  } else if (!activeBonuses.activeBonuses?.success && gamesList?.topGames?.success) {
    type = "games"
  } else {
    type = "loading"
  }

  return  <ExitIntentMainComponent exit={exit} isShowExitIntent={isShowExitIntent} t={t} showPopup={showPopup} type={type}/>
}
