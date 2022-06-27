import styles from '../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss';
import {urlGen} from "../../../../helpers/imageUrl";

export const BonusImage = ({bonusInfo}) => {

  return (
    <div className={styles.imageBackground} style={{backgroundImage: `url(${urlGen(bonusInfo?.image)})`}}></div>
  )
}
