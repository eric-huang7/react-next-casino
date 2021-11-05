import styles from '../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss';

export const BonusImage = () => {

  return (
    <div className={styles.imageBackground}>
      <img draggable={false} src="/assets/img/promotionsPage/lady.png" alt="bonus image"/>
    </div>
  )
}