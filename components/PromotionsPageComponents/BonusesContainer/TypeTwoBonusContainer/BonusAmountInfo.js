import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";


export const BonusAmountInfo = ({t, bonusInfo}) => {

  return (
    <div className={styles.bonusAmountInfo}>
      <p>
        {t(`bonuses.${bonusInfo?.id}.bonus_amount_info.max_bonus_amount`, {y_key: "$456667"})}
      </p>
      <p>
        {t(`bonuses.${bonusInfo?.id}.bonus_amount_info.min_deposit_amount`, {min_deposit_key: "$45"})}
      </p>
      <p>
        {t(`bonuses.${bonusInfo?.id}.bonus_amount_info.playthrough_value`, {wagner_require_key: "4.5"})}
      </p>
    </div>
  )
}