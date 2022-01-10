import styles from '../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss';
import {iconsUrl, urlGen} from "../../../helpers/imageUrl";


export const BonusItemContainer = ({bonusData}) => {


  return (
    <div className={styles.bonusItemContainer}>
      <div className={styles.bonusImageContainer}>
        <img src={urlGen(bonusData.image)} alt={`bonus image`}/>
      </div>

      <div  className={styles.bonusInfoContainer}>
        <h3>{"Bonus Tittle"}</h3>

        <div className={styles.bonusInfoInnerContainer}>
          <div className={styles.bonusIconContainer}>
            <img src={iconsUrl(bonusData.icon)} alt={'bonus icon'}/>
          </div>
          <div  className={styles.bonusDataContainer}>
            <p className={styles.bonusDescription}>{"dsgfsdf gsdfgsd fsdfsa ssdfdsfsd"}</p>
            <button className={styles.submitBonusButton}>{"Cash Back"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}