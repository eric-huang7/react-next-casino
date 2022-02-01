import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {useEffect, useRef} from "react";
import {MainHeading} from "./MainHeading";
import {MainBonusInfoContainer} from "./MainBonusInfoContainer";
import {showForgotPasswordPopup} from "../../redux/actions/showPopups";
import {useDispatch} from "react-redux";


export const BonusInfoContainer = ({isShow, infoClickHandler, bonusData, userCurrency, fromDeposit}) => {
  const bonusInfoRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isShow) {
      document.body.style.overflowY = "hidden"
    } else {
      if (fromDeposit) {

      } else {
        document.body.style.overflowY = "auto"
      }

    }
    return () => {
      if (fromDeposit) {

      } else {
        document.body.style.overflowY = "auto"
      }

    }
  }, [])

  const closeButtonClickHandler = (e) => {
    infoClickHandler(!isShow);
  }


  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(bonusInfoRef.current)) {
      closeButtonClickHandler(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      // dispatch(showTournaments(true));
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);

const clickPropag = (e) => {

  e.stopPropagation();
  e.preventDefault();
}

  return (
    <div onClick={(e) => clickPropag(e)} className={`${styles.mainWrapper}`}>
      <div ref={bonusInfoRef} className={styles.mainContainer}>
        <MainHeading text={"bonusInfoContainer.bonusInfoHeading"} />
        <MainBonusInfoContainer
            closeButtonClickHandler={closeButtonClickHandler}
            bonusData={bonusData}
            userCurrency={userCurrency}
        />
      </div>
    </div>
  )
}