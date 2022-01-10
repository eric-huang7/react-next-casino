import styles from '../../styles/ExitIntentComponent/ExitInentPopup.module.scss';
import Link from "next/link";
import {useEffect, useState} from "react";
import {Heading} from "./Heading";
import {SeeAllButton} from "./SeeAllButton";
import {InnerHeading} from "./InnerHeading";
import {ExitIntentMainComponent} from "./ExitIntentMainComponent";
import {numberTransformer} from "../../helpers/numberTransformer";



export const ExitIntentPopup = ({t, userInfo}) => {
  const [showPopup, setShowPopup] = useState(false);

  const exit = (e) => {

    setShowPopup(false);
  };

  const mouseEvent = (e) => {
    const shouldShowExitIntent =
      !e.toElement &&
      !e.relatedTarget &&
      e.clientY < 10 &&
      e.clientY > -5;

    if (shouldShowExitIntent) {

      document.removeEventListener('mouseout', mouseEvent);
      setShowPopup(true);
      // document.querySelector('.exit-intent-popup').classList.add('visible');

    }
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener('mouseout', mouseEvent);
      // document.querySelector('.exit-intent-popup').addEventListener('click', exit);
    }, 0);

    return () => {
      document.removeEventListener('mouseout', mouseEvent);
      clearTimeout(timer);
    }
  }, [])

  if (!userInfo.isAuthenticated) {
    return (
      <ExitIntentMainComponent exit={exit} t={t} showPopup={showPopup} type={"bonus"}/>
    )
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
        <ExitIntentMainComponent exit={exit} t={t} showPopup={showPopup} type={"games"}/>
      )
    } else {
      return (
        <ExitIntentMainComponent exit={exit} t={t} showPopup={showPopup} type={"bonus"}/>
      )
    }
  } else {
    return (
      <ExitIntentMainComponent exit={exit} t={t} showPopup={showPopup} type={"bonus"}/>
    )
  }
}