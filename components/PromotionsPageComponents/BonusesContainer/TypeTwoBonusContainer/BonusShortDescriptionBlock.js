import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";


export const BonusShortDescriptionBlock = ({t, bonusInfo, locale}) => {

  return (
    <div className={`${styles.bonusHeadingBlock} ${styles[locale]}`}>
      <p className={styles.bonusHeadingLineOne}>{t(`bonuses.${bonusInfo?.id}.description_short.line_one`)}</p>
      <p className={styles.bonusHeadingLineTwo}>{t(`bonuses.${bonusInfo?.id}.description_short.line_two`)}</p>
    </div>
  )
}