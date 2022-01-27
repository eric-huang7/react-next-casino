import styles from '../../../styles/ForgotPassword/ForgotPassword.module.scss';


export const InstructionsSendContainer = ({t, text}) => {



  return (
    <div className={styles.confirmedBlock}>
      <img src='/assets/img/paymentsModals/confirmed.png' alt='confirmed image'/>
      <p className={styles.confirmedText}>
        {t(text)}
      </p>
    </div>
  )
}