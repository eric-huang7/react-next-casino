import styles from "../../../../styles/HomePage/PromotionsBlock.module.scss";
import {urlGen} from "../../../../helpers/imageUrl";
import {useTranslation} from "next-i18next";


export const PromotionItem = ({bonusInfo, bonusCalculations}) => {
 const {t} = useTranslation("promotionsPage")

  return (
    <div className={styles.promotionMainItemWrapper}>
      <div className={styles.promotionItemWrapper}>
        <div className={styles.promotionFrame}>
          <div className={`${styles.promoHeading} __promoHeading`}>
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
              {t(`bonuses.${bonusInfo?.id}.description_long`, {x_key: bonusCalculations.x_key, y_key: bonusCalculations.y_key, wagner_require_key: bonusCalculations.wagner_require_key})}
            </p>
            <p className={styles.promotionAddText}>{bonusInfo.addText}</p>
            <ul className={styles.promotionAddTextList}>
              <li>
                {t(`bonuses.${bonusInfo?.id}.bonus_amount_info.max_bonus_amount`, {y_key: bonusCalculations.y_key})}
              </li>
              <li>
                {t(`bonuses.${bonusInfo?.id}.bonus_amount_info.min_deposit_amount`, {min_deposit_key: bonusCalculations.min_deposit_key})}
              </li>
              <li>
                {t(`bonuses.${bonusInfo?.id}.bonus_amount_info.playthrough_value`, {wagner_require_key: bonusCalculations.wagner_require_key})}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}