import styles from '../../../styles/ForgotPassword/ForgotPassword.module.scss';


export const InstructionsSendContainer = ({t}) => {



  return (
    <div className={styles.confirmedBlock}>
      <img src='/assets/img/paymentsModals/confirmed.png' alt='confirmed image'/>
      <p className={styles.confirmedText}>
        An email has been sent with instructions on how to change your password.
      </p>
    </div>
  )
}