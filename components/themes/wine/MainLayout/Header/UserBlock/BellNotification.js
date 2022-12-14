import { NotificationCounter } from './NotificationCounter'
import { NotificationPopup } from './NotificationPopup/NotificationPopup'
import { useContext, useEffect } from 'react'
import { NotifyContext } from '/components/NotifyContext/NotifyContext'
import { notificator } from '/helpers/notificator'
import ErrorEmpty from '/components/ErrorBoundaryComponents/ErrorEmpty'
import { Box } from "@chakra-ui/react"

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
    <Box
      onMouseEnter={() => showBellHandler()}
      onMouseLeave={() => hideBellHandler()}
      position="relative"
      flexShrink="0"
      w={{base: "30px", lg: "38px"}}
      h={{base: "37px", lg: "45px"}}
      marginRight="16px"
      backgroundImage="url('/assets/icons/bell_icon.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      cursor="pointer"
    >
      <ErrorEmpty>
        <NotificationCounter messageCount={messageCount}/>
      </ErrorEmpty>

      {isShowNotifications && <ErrorEmpty>
        <NotificationPopup
          hideBellHandler={hideBellHandler}
          subscriptInfo={subscriptInfo}
          checkReadMessages={checkReadMessages}
          notifyData={showMessages}
          isShowNotifications={isShowNotifications}
        />
      </ErrorEmpty>}
    </Box>
  )
}
