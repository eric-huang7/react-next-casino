import styles from '../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss';

export const BonusMainHeading = ({t, bonusInfo, locale}) => {

  return (
    <div className={`${styles.bonusMainHeadingBlock} ${styles[locale]}`}>
      <p className={styles.headinLineOne}>{t(`bonuses.${bonusInfo?.id}.heading.line_one`)}</p>
      <p className={styles.headingLineTwo}>{t(`bonuses.${bonusInfo?.id}.heading.line_two`)}</p>
    </div>
  )
}