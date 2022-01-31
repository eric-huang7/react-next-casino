import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {useRef} from "react";


export const BonusInfoContainer = () => {
  const bonusInfoRef = useRef();


  return (
    <div className={`${styles.mainWrapper}`}>
      <div ref={bonusInfoRef} className={styles.mainContainer}>

      </div>
    </div>
  )
}