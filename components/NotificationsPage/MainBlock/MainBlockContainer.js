import styles from '../../../styles/NotificationsPage/NotificationsPage.module.scss'
import { NotifyHeader } from './NotifyHeader'
import { MessagesContainer } from './MessagesContainer'
import { useSelector } from 'react-redux'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'


export const MainBlockContainer = ({ t,notifyData }) => {

  const subscriptInfo = useSelector((store) => store.userSubscriptions.notifySubscribe)

  return (
    <div className={styles.notifyContainer}>
      <ErrorEmpty>
        <NotifyHeader subscriptInfo={subscriptInfo} notifyData={notifyData} t={t}/>
      </ErrorEmpty>
      <div className={styles.mainMessagesWrapper}>
        <ErrorText>
          <MessagesContainer notifyData={notifyData} t={t}/>
        </ErrorText>
      </div>
    </div>
  )
}
