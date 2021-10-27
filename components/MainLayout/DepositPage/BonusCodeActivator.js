import styles from '../../../styles/DepositPage/DepositPage.module.scss'

export const BonusCodeActivator = ({t, bonusCodeInputActiveHandler, isActiveBonusInput}) => {

  return (
    <div onClick={() => bonusCodeInputActiveHandler()} className={styles.depositsIhaveBonusCodeBlock}>
      <p>{isActiveBonusInput ? "I don't have a promo code" : 'I have a bonus code'}</p>
    </div>
  )
}