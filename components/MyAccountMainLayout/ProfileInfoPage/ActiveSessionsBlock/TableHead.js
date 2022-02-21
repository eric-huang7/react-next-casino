
export const TableHead = ({ t }) => {

  return (
    <tr>
      <th>{t('myAccount.profilePage.sessionsBlocks.tableHead.createdAt')}</th>
      <th>IP</th>
      <th>{t('myAccount.profilePage.sessionsBlocks.tableHead.country')}</th>
      <th>{t('myAccount.profilePage.sessionsBlocks.tableHead.device')}</th>
      <th>{''}</th>
    </tr>
  )
}