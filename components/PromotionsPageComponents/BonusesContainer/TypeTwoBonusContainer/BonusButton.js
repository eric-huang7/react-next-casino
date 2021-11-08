import styles from "../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss";


export const BonusButton = ({bonusInfo}) => {
  let bonusImage = '/assets/img/promotionsPage/bonus2.png'
  return (
    <div className={styles.bonusButtonBlock}>
      <img draggable={false} src={bonusInfo?.button ? `https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/images/${bonusInfo.button}` : bonusImage} alt="bonus button icon"/>
    </div>
  )
}