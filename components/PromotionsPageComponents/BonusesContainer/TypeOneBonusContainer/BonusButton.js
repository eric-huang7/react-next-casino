import styles from "../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss";


export const BonusButton = () => {

  return (
    <div className={styles.bonusButtonBlock}>
      {/*<div className={styles.bunusButton}></div>*/}
      <img draggable={false} src="/assets/img/promotionsPage/bonus.png" alt="bonus button icon"/>
    </div>
  )
}