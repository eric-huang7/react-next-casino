import styles from '../../../styles/MessageContainer/Messagecontainer.module.scss'

export const CloseButton = ({ closeMessagePopup }) => {

  return (
    <button onClick={() => closeMessagePopup()} className={styles.closeButton}>
      <span className={styles.closeOne}></span>
      <span className={styles.closeTwo}></span>
    </button>
  )
}