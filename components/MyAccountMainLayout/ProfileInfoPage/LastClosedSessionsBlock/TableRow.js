import { useRouter } from 'next/router'
import { dateFormatter } from '../../../../helpers/dateTranslator'

export const TableRow = ({ t, sessionData }) => {
  const router = useRouter()

  let date = dateFormatter(sessionData.time_created, router.locale)
  let ip = sessionData.ip_address.replace('::ffff:', '')
  let country = sessionData.ip_country
  let device = sessionData.device

  return (
    <tr>
      <td>{date}</td>
      <td>{ip}</td>
      <td>{country}</td>
      <td>{device}</td>
    </tr>
  )
}