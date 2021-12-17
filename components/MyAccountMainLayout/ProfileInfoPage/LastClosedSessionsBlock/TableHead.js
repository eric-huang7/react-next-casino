import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss';



export const TableHead = ({t}) => {


  return (
    <tr>
      <th>Created At</th>
      <th>IP</th>
      <th>Country</th>
      <th>Device</th>
    </tr>
  )
}