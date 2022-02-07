import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";


export const BonusAmountInfo = ({t, bonusInfo, bonusCalculations}) => {

  return (
    <div className={styles.bonusAmountInfo}>
      <p>
        {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.max_bonus_amount`, {y_key: bonusCalculations.y_key})}
      </p>
      <p>
        {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.min_deposit_amount`, {min_deposit_key: bonusCalculations.min_deposit_key})}
      </p>
      <p>
        {t(`bonuses.bonus_${bonusInfo?.id}.bonus_amount_info.playthrough_value`, {wagner_require_key: bonusCalculations.wagner_require_key})}
      </p>
    </div>
  )
}