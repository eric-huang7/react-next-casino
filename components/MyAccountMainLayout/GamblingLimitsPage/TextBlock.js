import styles from '../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss';



export const TextBlock = ({t}) => {


  return (
    <p className={styles.textBlock}>
      Felt the need to be apart from the casino for quite a time? Here you can set the Self-exclusion period for your player account from 24 hours up to 3 years. The setting is applied immediately. During a Self-exclusion period there will be no way for you to get to your account. You neither can edit the Self-exclusion period. Please note! Make sure to request the cashout before Self-exclusion period setting. Once your account is locked you will not be able to request for withdrawal. Upon expiring, your account will be automatically re-activated and you will receive the email notification.
    </p>
  )
}