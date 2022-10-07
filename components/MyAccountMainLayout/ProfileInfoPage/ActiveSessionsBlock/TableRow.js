import styles from '../../../../styles/MyAccount/UserInfoPage/ActiveSessionsBlock.module.scss'
import { dateFormatter } from '../../../../helpers/dateTranslator'
import { useRouter } from 'next/router'
import {chakra} from "@chakra-ui/react";
import RoundButton from "../../../buttons/RoundButton";

const Cell = ({children}) => <chakra.td textAlign="center" p="12px 10px">{children}</chakra.td>;

export const TableRow = ({ t, sessionData, currentSession, closeSessionHandler, index }) => {
  const router = useRouter()

  let date = dateFormatter(sessionData.time_created, router.locale)
  let ip = sessionData.ip_address.replace('::ffff:', '')
  let country = sessionData.ip_country
  let device = sessionData.device
  let isCurrent = currentSession === sessionData.id

  return (
    <chakra.tr bg={index % 2 ? "#eeeeee" : "#ffffff"}>
      <Cell>{date}</Cell>
      <Cell>{ip}</Cell>
      <Cell>{country}</Cell>
      <Cell>{device}</Cell>
      <Cell>
        {isCurrent
          ? t('myAccount.profilePage.sessionsBlocks.current')
          : <RoundButton
              solid
              // px="15px"
              onClick={() => closeSessionHandler(sessionData)}
              title={t('myAccount.profilePage.sessionsBlocks.close')}
            />
        }
      </Cell>
    </chakra.tr>
  )
}
