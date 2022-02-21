import styles from '../../../styles/MyAccount/MyAccount.module.scss'

export const Heading = ({ t, heading }) => {

  return (
    <div className={styles.headingWrapper}>
      <h2 className={styles.pageHeading}>{t(heading)}</h2>
    </div>
  )
}