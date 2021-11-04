import styles from '../../../styles/PromotionsPage/MainBlock.module.scss';

export const WelcomeBlock = ({t, dataForMainBlock}) => {

  return (
    <div className={styles.welcomeWrapper}>
      <span className={styles.welcomeMainText}>{dataForMainBlock.welcomeMainText}</span>
      <div className={styles.imageWrapper}>
        <img className={styles.welcomeImage} src={dataForMainBlock.welcomeMainImg} alt="welcome bonus image"/>
        <span className={styles.welcomeValue}>{dataForMainBlock.welcomeValue}</span>
        <span className={styles.welcomeAddText}>{dataForMainBlock.welcomeAddText}</span>
      </div>
      <div className={styles.depositButton}>
        <span className={styles.welcomeDepositButton}>{dataForMainBlock.depositButtonText}</span>
        {/*<img className={styles.welcomeDepositButton} src={dataForMainBlock.welcomeDepositButton} alt="deposit button"/>*/}
      </div>
    </div>
  )
}