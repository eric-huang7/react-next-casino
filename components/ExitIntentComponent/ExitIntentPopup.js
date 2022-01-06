import styles from '../../styles/ExitIntentComponent/ExitInentPopup.module.scss';
import Link from "next/link";
import {useEffect, useState} from "react";
import {Heading} from "./Heading";
import {SeeAllButton} from "./SeeAllButton";
import {InnerHeading} from "./InnerHeading";
import {ExitIntentMainComponent} from "./ExitIntentMainComponent";



export const ExitIntentPopup = ({t, userInfo}) => {
  const [showPopup, setShowPopup] = useState(false);

  const exit = (e) => {
    setShowPopup(false);
  };

  const mouseEvent = (e) => {
    const shouldShowExitIntent =
      !e.toElement &&
      !e.relatedTarget &&
      e.clientY < 10;

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

  // console.log(userInfo, '<<<<<<<<<<,')

  if (!userInfo.isAuthenticated) {
    return (
      <ExitIntentMainComponent exit={exit} t={t} showPopup={showPopup} type={"bonus"}/>
    )
  } else {
    return (
      <ExitIntentMainComponent exit={exit} t={t} showPopup={showPopup} type={"games"}/>
    )
  }


}