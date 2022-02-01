import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const BonusAdditionalInfo = ({bonusData}) => {

  return (
    <div className={styles.additionalBonusInfo}>
      <img src={'/assets/icons/arrowsIcon.png'} alt="icon exchange"/>
      <p>
        {bonusData.min_deposit}
      </p>
    </div>
  )
}