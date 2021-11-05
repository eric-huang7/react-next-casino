import styles from '../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss';

export const BonusImage = () => {

  return (
    <div className={styles.imageBackground}>
      <img draggable={false} src="/assets/img/promotionsPage/elvis.png" alt="bonus image"/>
    </div>
  )
}