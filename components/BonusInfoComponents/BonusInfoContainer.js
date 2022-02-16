import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {useEffect, useRef} from "react";
import {MainBonusInfoContainer} from "./MainBonusInfoContainer";


export const BonusInfoContainer = ({isShow, infoClickHandler, bonusData, userCurrency, fromDeposit}) => {
  const bonusInfoRef = useRef();

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
        {/*<MainHeading text={"bonusInfoContainer.bonusInfoHeading"} />*/}
        <MainBonusInfoContainer
            closeButtonClickHandler={closeButtonClickHandler}
            bonusData={bonusData}
            userCurrency={userCurrency}
        />
      </div>
    </div>
  )
}