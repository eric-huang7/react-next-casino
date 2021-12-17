import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss';
import {SessionsTable} from "./SessionsTable";


export const LastClosedSessionsBlock = ({t, userInfo}) => {


  return (
    <div className={styles.activeSessionsMainBlock}>
      <h3 className={styles.activeSessionsHeading}>Last closed sessions</h3>
      <SessionsTable t={t} userInfo={userInfo}/>
    </div>
  )
}