import styles from "../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss";
import {iconsUrl} from "../../../helpers/imageUrl";


export const BonusIcon = ({bonusData}) => {


  return (
    <div className={styles.bonusIconContainer}>
      <img src={iconsUrl(bonusData.icon)} alt={'bonus icon'}/>
    </div>
  )
}