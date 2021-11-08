import styles from "../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss";
// import imageButton from '/assets/img/promotionsPage/bonus2.png'

export const BonusButton = ({bonusInfo}) => {
let bonusImage = '/assets/img/promotionsPage/bonus2.png'
  return (
    <div className={styles.bonusButtonBlock}>
      {/*<div className={styles.bonusButton}></div>*/}
      <img draggable={false} src={bonusInfo?.button ? `https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${bonusInfo.button}` : bonusImage} alt="bonus button icon"/>
    </div>
  )
}