import styles from '../../../styles/DepositPage/DepositPage.module.scss'

export const BonusCodeActivator = ({t, bonusCodeInputActiveHandler, isActiveBonusInput}) => {

  return (
    <div onClick={() => bonusCodeInputActiveHandler()} className={styles.depositsIhaveBonusCodeBlock}>
      <p>{isActiveBonusInput ? t("depositPage.iDontHaveBonusCodeButton") : t("depositPage.iHaveBonusCodeButton")}</p>
    </div>
  )
}