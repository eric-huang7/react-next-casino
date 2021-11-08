import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";


export const BonusLongDescriptionBlock = ({t, bonusInfo}) => {

  return (
    <div className={styles.bonusDescriptionBlock}>
      <p className={styles.bonusDescription}>
        {t(`bonuses.${bonusInfo?.id}.description_long`, {x_key: "456", y_key: "$456667", wagner_require_key: "4.5"})}
      </p>
    </div>
  )
}