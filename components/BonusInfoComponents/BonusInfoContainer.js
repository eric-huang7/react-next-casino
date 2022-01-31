import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {useEffect, useRef} from "react";
import {MainHeading} from "./MainHeading";
import {MainBonusInfoContainer} from "./MainBonusInfoContainer";
import {showForgotPasswordPopup} from "../../redux/actions/showPopups";
import {useDispatch} from "react-redux";


export const BonusInfoContainer = () => {
  const bonusInfoRef = useRef();
  const dispatch = useDispatch();


  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(bonusInfoRef.current)) {
      // dispatch(showForgotPasswordPopup(false));
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      // dispatch(showTournaments(true));
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);

  return (
    <div className={`${styles.mainWrapper}`}>
      <div ref={bonusInfoRef} className={styles.mainContainer}>
        <MainHeading text={"Deposit $100 and get $200"} />
        <MainBonusInfoContainer />
      </div>
    </div>
  )
}