import styles from '../../../../styles/Header/UserBlock.module.scss'
import { NotificationCounter } from './NotificationCounter'
import { NotificationPopup } from './NotificationPopup/NotificationPopup'
import { useContext, useEffect } from 'react'
import { NotifyContext } from '../../../NotifyContext/NotifyContext'
import { notificator } from '../../../../helpers/notificator'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const BellNotification = ({
  messageCount,
  hideBellHandler,
  showBellHandler,
  isShowNotifications,
  subscriptInfo,
  checkReadMessages,
  showMessages
}) => {

  const notifySocket = useContext(NotifyContext)

  function messageHandler (e) {
    let res = JSON.parse(e.data)
    if (res.type === 3 || res.type === 4) {
      if (subscriptInfo && Notification.permission === 'granted') {
        let audio = new Audio('/sounds/message.mp3')
        audio.play().then(e => console.log('message play ===>', e))
        notificator(res)
      }
    }
  }

  useEffect(() => {
    if (notifySocket.socket.current) {
      notifySocket.socket.current.addEventListener('message', messageHandler)
    }
    return () => removeEventListener('message', messageHandler)
  }, [notifySocket.socket.current, subscriptInfo])

  return (
    <div
      onMouseEnter={() => showBellHandler()}
      onMouseLeave={() => hideBellHandler()}
      className={styles.userMainBlockBellIcon}
    >
      <ErrorEmpty>
        <NotificationCounter messageCount={messageCount}/>
      </ErrorEmpty>

      {isShowNotifications
        ?
        <ErrorEmpty>
          <NotificationPopup
            hideBellHandler={hideBellHandler}
            subscriptInfo={subscriptInfo}
            checkReadMessages={checkReadMessages}
            notifyData={showMessages}
            isShowNotifications={isShowNotifications}
          />
        </ErrorEmpty>
        : <></>
      }
    </div>
  )
}