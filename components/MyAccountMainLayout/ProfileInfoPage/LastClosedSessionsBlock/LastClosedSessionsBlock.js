import { SessionsTable } from './SessionsTable'
import {Box} from "@chakra-ui/layout";
import BodyText from "../../../typography/BodyText";

export const LastClosedSessionsBlock = ({ t, userInfo }) => {

  return (
    <Box py="35px">
      <BodyText as="h3" bold fontSize={17} mb="35px">
        {t('myAccount.profilePage.sessionsBlocks.closedSessions')}
      </BodyText>
      <SessionsTable t={t} sessionsInfo={userInfo.userClosedSessions}/>
    </Box>
  )
}
