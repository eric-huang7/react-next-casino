import styles from "../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss";
import {urlGen} from "../../../helpers/imageUrl";


export const BonusImageContainer = ({bonusData}) => {



  return (
    <div className={styles.bonusImageContainer}>
      <img src={urlGen(bonusData.image)} alt={`bonus image`}/>
    </div>
  )
}