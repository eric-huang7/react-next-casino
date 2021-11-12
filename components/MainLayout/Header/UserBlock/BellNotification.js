import styles from "../../../../styles/Header/UserBlock.module.scss";


export const BellNotification = ({messageCount}) => {

  return (
    <div onClick={() => clickBellHandler()} className={styles.userMainBlockBellIcon}>
      <span className={styles.userMainBlockBellIconNotification}>{messageCount}</span>
    </div>
  )
}