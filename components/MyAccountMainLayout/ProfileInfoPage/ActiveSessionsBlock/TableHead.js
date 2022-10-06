

export const TableHead = ({ t }) => {
  const columns = [
    t('myAccount.profilePage.sessionsBlocks.tableHead.createdAt'),
    'IP',
    t('myAccount.profilePage.sessionsBlocks.tableHead.country'),
    t('myAccount.profilePage.sessionsBlocks.tableHead.device'),
    ''
  ];

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
