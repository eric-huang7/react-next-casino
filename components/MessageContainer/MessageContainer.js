import styles from '../../styles/MessageContainer/Messagecontainer.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { messagePopupDeactivate } from '../../redux/actions/showPopups'
import { MessageTextContainer } from './MessageTextContainer'
import { CloseButton } from './CloseButton'

export const MessageContainer = () => {

  const dispatch = useDispatch()
  const popupData = useSelector((store) => store.showPopupsReducer)

    console.log(popupData.messagePopupData,popupData.messagePopupData.color,  '@@@@@@@@@@@@@@')

  const closeMessagePopup = () => {
    dispatch(messagePopupDeactivate())
  }

  return (
    <div style={{backgroundColor: popupData.messagePopupData.color}} className={styles.messageContainer}>
      <MessageTextContainer messageType={popupData.messagePopupData.data}/>
      <CloseButton closeMessagePopup={closeMessagePopup}/>
    </div>
  )
}