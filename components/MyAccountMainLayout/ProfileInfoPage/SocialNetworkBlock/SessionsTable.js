import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss';
import {TableHead} from "./TableHead";
import {TableRow} from "./TableRow";


export const SessionsTable = ({t, userInfo}) => {

  return (
    <table className={styles.sessionsTable}>
      <thead>
        <TableHead t={t}/>
      </thead>
      <tbody>
        <TableRow t={t} />
      </tbody>
    </table>
  )
}