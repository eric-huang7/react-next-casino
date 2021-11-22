import styles from "../../../../styles/Header/UserBlock.module.scss";


export const NotificationCounter = ({messageCount}) => {

  return (
    <span className={styles.userMainBlockBellIconNotification}>{messageCount}</span>
  )
}