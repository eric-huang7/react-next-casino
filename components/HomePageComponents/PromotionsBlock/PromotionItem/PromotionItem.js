import styles from "../../../../styles/HomePage/PromotionsBlock.module.scss";
import {urlGen} from "../../../../helpers/imageUrl";
import {useTranslation} from "next-i18next";


export const PromotionItem = ({bonusInfo, bonusCalculations}) => {
 const {t} = useTranslation("promotionsPage")


  return (
    <div>
      <div className={styles.promotionItemWrapper}>
        <div className={styles.promotionFrame}>
          <div className={styles.promoHeading}>
            <h3>
              <span>{t(`bonuses.${bonusInfo?.id}.description_short.line_one`)} </span>
              <span>{t(`bonuses.${bonusInfo?.id}.description_short.line_two`)}</span>
            </h3>
          </div>
          <div className={styles.promoImage}>
            <img src={urlGen(bonusInfo.image)} alt={`promotion image ${bonusInfo.id}`}/>
          </div>
        </div>
        <div className={styles.promotionTextBlock}>
          <div className={styles.frameTextBlock}>
            <p className={styles.promotionMainText}>
              {/*{t(`bonuses.${bonusInfo?.id}.description_long`, {x_key: bonusCalculations.x_key, y_key: bonusCalculations.y_key, wagner_require_key: bonusCalculations.wagner_require_key})}*/}
            </p>
            <p className={styles.promotionAddText}>{bonusInfo.addText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}