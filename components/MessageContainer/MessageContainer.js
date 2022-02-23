import styles from '../../styles/MessageContainer/Messagecontainer.module.scss'
import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { messagePopupDeactivate } from '../../redux/actions/showPopups'
import { MessageTextContainer } from '../MyAccountMainLayout/ErrorMessage/MessageTextContainer'
import { CloseButton } from '../MyAccountMainLayout/ErrorMessage/CloseButton'

export const MessageContainer = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const popupText = useSelector((store) => store.showPopupsReducer.messagePopupData)

  const closeMessagePopup = () => {
    dispatch(messagePopupDeactivate())
  }

  return (
    <div className={styles.messageContainer}>
      <MessageTextContainer messageType={popupText}/>
      <CloseButton closeMessagePopup={closeMessagePopup}/>
    </div>
  )
}