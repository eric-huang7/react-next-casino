import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss';
import {SessionsTable} from "../SocialNetworkBlock/SessionsTable";


export const ActiveSessionsBlock = ({t, userInfo}) => {

  console.log(userInfo)

  return (
    <div className={styles.activeSessionsMainBlock}>
      <h3 className={styles.activeSessionsHeading}>Active sessions</h3>
      <SessionsTable t={t} userInfo={userInfo}/>
    </div>
  )
}