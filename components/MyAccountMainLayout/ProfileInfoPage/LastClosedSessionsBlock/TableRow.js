import { useRouter } from 'next/router'
import { dateFormatter } from '../../../../helpers/dateTranslator'
import Cell from "../../../table/Cell";
import {chakra} from "@chakra-ui/react";

export const TableRow = ({ t, sessionData }) => {
  const router = useRouter()

  let date = dateFormatter(sessionData.time_created, router.locale)
  let ip = sessionData.ip_address.replace('::ffff:', '')
  let country = sessionData.ip_country
  let device = sessionData.device

  return (
    <chakra.tr>
      <Cell>{date}</Cell>
      <Cell>{ip}</Cell>
      <Cell>{country}</Cell>
      <Cell>{device}</Cell>
    </chakra.tr>
  )
}
