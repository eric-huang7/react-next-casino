import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss';


export const NotifyHeader = () => {

  return (
    <div className={styles.notifyHeader}>
      <h3>Notifications</h3>
      <span>Mark all as read</span>
      <img src={`/assets/icons/notifications/sound_on.svg`} alt="notification sound icon"/>
    </div>
  )
}