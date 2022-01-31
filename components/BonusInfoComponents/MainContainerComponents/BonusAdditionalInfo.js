import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const BonusAdditionalInfo = () => {

  return (
    <div className={styles.additionalBonusInfo}>
      <img src={'/assets/img.png'} alt="icon exchange"/>
      <p>
        {'A minimum deposit of 20 USD is required to receive the 180 free spins.'}
      </p>
    </div>
  )
}