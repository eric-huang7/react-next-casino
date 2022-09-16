import { Heading } from '../ComponentsForPages/Heading'
import { TrxHistoryLinksContainer } from '../TrxHistory/TrxHistoryLinksContainer'
import { BetsHistoryTableContainer } from './BetsHistoryTableContainer'
import { useSelector } from 'react-redux'
import { Box, Text } from "@chakra-ui/react"
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const BetsHistory = ({ t, router }) => {
  const userInfo = useSelector((store) => store.authInfo)

  return (
    <div>
      <Heading t={t} heading={'myAccount.pageHeadings.betHistory'}/>

      {!userInfo.loadingUserBetsData ? (
        <>
          <TrxHistoryLinksContainer t={t} router={router}/>

          <Box py="34px">
            <Text>{t("myAccount.history.bets.textBlock")}</Text>
          </Box>

          <ErrorText>
            <BetsHistoryTableContainer betsData={userInfo.userBetsData} t={t}/>
          </ErrorText>
        </>
      ) : (
        <LoadingComponent t={t}/>
      )}

    </div>
  )
}
