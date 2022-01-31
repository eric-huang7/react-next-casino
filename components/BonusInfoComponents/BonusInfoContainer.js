import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {useRef} from "react";
import {MainHeading} from "./MainHeading";
import {MainBonusInfoContainer} from "./MainBonusInfoContainer";


export const BonusInfoContainer = () => {
  const bonusInfoRef = useRef();


  return (
    <div className={`${styles.mainWrapper}`}>
      <div ref={bonusInfoRef} className={styles.mainContainer}>
        <MainHeading text={"Deposit $100 and get $200"} />
        <MainBonusInfoContainer />
      </div>
    </div>
  )
}