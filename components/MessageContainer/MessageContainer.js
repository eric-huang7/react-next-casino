import styles from '../../styles/MessageContainer/Messagecontainer.module.scss'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { messagePopupDeactivate } from '../../redux/actions/showPopups'

export const MessageContainer = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const popupText = useSelector((store) => store.showPopupsReducer.messagePopupData)

  console.log(popupText)

  const closeMessagePopup = () => {
    dispatch(messagePopupDeactivate())
  }

  return (
    <div className={styles.messageContainer}>
      <p>{t(popupText)}</p>
      <button onClick={() => closeMessagePopup()} className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}