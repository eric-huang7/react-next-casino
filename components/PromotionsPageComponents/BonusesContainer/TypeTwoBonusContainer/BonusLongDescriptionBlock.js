import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";


export const BonusLongDescriptionBlock = ({t, bonusInfo, bonusCalculations}) => {

  return (
    <div className={styles.bonusDescriptionBlock}>
      <p className={styles.bonusDescription}>
        {t(`bonuses.${bonusInfo?.id}.description_long`, {x_key: bonusCalculations.x_key, y_key: bonusCalculations.y_key, wagner_require_key: bonusCalculations.wagner_require_key})}
      </p>
    </div>
  )
}