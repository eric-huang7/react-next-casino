import styles from '../../styles/ExitIntentComponent/ExitInentPopup.module.scss';


import {useEffect, useState} from "react";



export const ExitIntentPopup = ({t}) => {
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
      document.addEventListener('keydown', exit);
      // document.querySelector('.exit-intent-popup').addEventListener('click', exit);
    }, 0);

    return () => {
      clearTimeout(timer);
    }
  }, [])


  return (
    <div className={`${styles.exit_intent_popup} ${showPopup ? styles.visible : ''}`}>
      <div className={styles.exitMainContainer}>
        <span className={styles.close} onClick={(e) => exit(e)}>x</span>
      </div>
    </div>
  )
}