import styles from '../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss';
import {urlGen} from "../../../../helpers/imageUrl";

export const BonusImage = ({bonusInfo}) => {

  return (
    <div className={styles.imageBackground}>
      <img draggable={false} src={urlGen(bonusInfo?.image)} alt="bonus image"/>
    </div>
  )
}